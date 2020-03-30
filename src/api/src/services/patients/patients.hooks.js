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
    create: [ (context) => {
      if (context.params.user && context.params.user.role == 0) {
        throw new Error("Patients are not allowed to create new patients");
      }

      return context;
    } ],
    update: [],
    patch: [],
    remove: [ (context) => {
      if (context.params.user && context.params.user.role == 0) {
        throw new Error("Patients are not allowed to delete patients");
      }

      return context;
    } ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [ async (context) => {
      const result = context.result;
      const usersService = context.app.service("users");

      await usersService.create({
        id: result.id,
        username: result.study_id
      });

      return context;
    } ],
    update: [ async (context) => {
      const result = context.result;
      const usersService = context.app.service("users");

      await usersService.patch(result.id, {
        username: result.study_id
      });

      return context;
    } ],
    patch: [ async (context) => {
      const data = context.data;
      if ("study_id" in data) {
        const result = context.result;
        const usersService = context.app.service("users");

        await usersService.patch(result.id, {
          username: result.study_id
        });
      }

      return context;
    } ],
    remove: [ async (context) => {
      const result = context.result;
      const usersService = context.app.service("users");

      await usersService.remove(result.id);

      return context;
    } ]
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
