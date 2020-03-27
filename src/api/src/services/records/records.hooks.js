const { authenticate } = require("@feathersjs/authentication").hooks;
const axios = require("axios");

module.exports = {
  before: {
    all: [ authenticate("jwt") ],
    find: [],
    get: [],
    create: [ (context) => {
      if (!context.data.patient_id) {
        context.data = Object.assign({}, context.data, { patient_id: context.params.user.id });
      }

      return context;
    } ],
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
      const upload = context.app.service("upload");
      const patients = context.app.service("patients");

      await upload.create({
        id: `${result.id}.wav`,
        uri: context.data.uri
      });

      const patient = await patients.get(context.data.patient_id);
      await patients.patch(patient.id, {
        num_records: patient.num_records + 1,
        has_new: true
      });

      setTimeout(async () => {
        await axios.get(`${process.env.MODEL_URL}${result.id}`);
      }, 5000);

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
