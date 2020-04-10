const { authenticate } = require("@feathersjs/authentication").hooks;
const { hashPassword, protect } = require("@feathersjs/authentication-local").hooks;
const { iff, disallow, discard } = require("feathers-hooks-common");

module.exports = {
  before: {
    all: [],
    find: [authenticate("jwt"), (context) => {
      if (context.params.user) {
        if (context.params.user.role == "patient") {
          context.params.query = Object.assign({}, context.params.query, { id: context.params.user.id });
        } else if (context.params.user.role == "clinician") {
          context.params.query = Object.assign({}, context.params.query, { role: "patient" });
        }
      }

      return context;
    }],
    get: [authenticate("jwt"), (context) => {
      if (context.params.user && context.params.user.role == "patient") {
        if (context.id != context.params.user.id) {
          context.result = "Patients not allowed to visit other userid.";
          context.statusCode = 400;
        }
      }

      return context;
    }],
    create: [hashPassword("password"), authenticate("jwt"), iff((context) => {
      if (!context.params.user) {
        return true;
      }
      if (context.params.user.role == "admin" && context.data.role != "patient") {
        return true;
      }

      return false;
    }, disallow())],
    update: [hashPassword("password"), authenticate("jwt"), discard("id", "username")],
    patch: [hashPassword("password"), authenticate("jwt"), discard("id", "username")],
    remove: [authenticate("jwt"), iff((context) => {
      if (!context.params.user || context.params.user.role == "admin") {
        return true;
      }

      return false;
    }, disallow())]
  },

  after: {
    all: [protect("password")],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
