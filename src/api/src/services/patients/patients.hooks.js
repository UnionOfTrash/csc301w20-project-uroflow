const { authenticate } = require("@feathersjs/authentication").hooks;
const { iff, disallow, discard } = require("feathers-hooks-common");

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [(context) => {
      if (context.params.user && context.params.user.role == "patient") {
        context.params.query = Object.assign({}, context.params.query, { id: context.params.user.id });
      }

      return context;
    }],
    get: [(context) => {
      if (context.params.user && context.params.user.role == "patient") {
        if (context.id != context.params.user.id) {
          context.result = { error: "Patients not allowed to visit other patients." };
          context.statusCode = 400;
        }
      }

      return context;
    }],
    create: [iff((context) => {
      if (context.params.user && context.params.user.role != "patient") {
        return false;
      }

      return true;
    }, disallow("external"))],
    update: [discard("id", "study_id")],
    patch: [discard("id", "study_id")],
    remove: [iff((context) => {
      if (!context.params.user || context.params.user.role == "admin") {
        return false;
      }

      return true;
    }, disallow("external"))]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [async (context) => {
      const result = context.result;
      const usersService = context.app.service("users");

      await usersService.create({
        id: result.id,
        username: result.study_id
      });

      return context;
    }],
    update: [],
    patch: [],
    remove: [async (context) => {
      const result = context.result;
      const usersService = context.app.service("users");

      await usersService.remove(result.id);

      return context;
    }]
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
