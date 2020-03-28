const { authenticate } = require("@feathersjs/authentication").hooks;

module.exports = {
  before: {
    all: [ authenticate("jwt") ],
    find: [ (context) => {
      if (context.params.user && context.params.user.role == 0) {
        context.params.query = Object.assign({}, context.params.query, { id: context.params.user.id });
      }

      return context;
    } ],
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
        username: result.study_id
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
