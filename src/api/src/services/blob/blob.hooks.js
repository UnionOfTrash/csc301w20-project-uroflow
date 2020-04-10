const { authenticate } = require("@feathersjs/authentication").hooks;
const { protect } = require("@feathersjs/authentication-local").hooks;
const { iff, disallow } = require("feathers-hooks-common");

module.exports = {
  before: {
    all: [authenticate("jwt"), iff((context) => {
      if (!context.params.user || context.params.user.role != "patient") {
        return false;
      }

      return true;
    }, disallow())],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [protect("uri")],
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
