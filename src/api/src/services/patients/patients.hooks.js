const { authenticate } = require("@feathersjs/authentication").hooks;

module.exports = {
  before: {
    all: [ authenticate("jwt") ],
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
    create: [ async (context) => {
      const result = context.result;
      const users = context.app.service("users");

      await users.create({
        id: result.id,
        username: result.study_id,
      });

      return context;
    } ],
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
