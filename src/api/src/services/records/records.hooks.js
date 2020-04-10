const { authenticate } = require("@feathersjs/authentication").hooks;
const { iff, disallow, discard, required } = require("feathers-hooks-common");
const axios = require("axios");

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [(context) => {
      if (context.params.user && context.params.user.role == "patient") {
        context.params.query = Object.assign({}, context.params.query, { patient_id: context.params.user.id });
      }

      return context;
    }],
    get: [],
    create: [required("uri"), iff((context) => {
      if (context.params.user && context.params.user.role != "patient") {
        return true;
      }

      return false;
    }, disallow()), (context) => {
      if (!context.data.patient_id) {
        context.data = Object.assign({}, context.data, { patient_id: context.params.user.id });
      }

      return context;
    }],
    update: [discard("id", "patient_id")],
    patch: [discard("id", "patient_id")],
    remove: [iff((context) => {
      if (!context.params.user && context.params.user.role == "admin") {
        return false;
      }

      return true;
    }, disallow())]
  },

  after: {
    all: [],
    find: [async (context) => {
      const result = context.result;
      const blobService = context.app.service("blob");

      for (const record of result) {
        const thumbnail = await blobService.get(record.id + ".png");
        const data = await blobService.get(record.id + ".csv");
        record.thumbnail = thumbnail.uri;
        record.data = data.uri;
      }

      return context;
    }],
    get: [(context) => {
      if (context.params.user && context.params.user.role == "patient") {
        if (context.result.patient_id != context.params.user.id) {
          context.result = "Not allowed to read this record"
          context.statusCode = 400;
        }
      }

      return context;
    }, async (context) => {
      const result = context.result;
      const blobService = context.app.service("blob");

      const thumbnail = await blobService.get(result.id + ".png");
      const data = await blobService.get(result.id + ".csv");
      result.thumbnail = thumbnail.uri;
      result.data = data.uri;

      return context;
    }],
    create: [async (context) => {
      const result = context.result;
      const blob = context.app.service("blob");
      const patients = context.app.service("patients");

      await blob.create({
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
      }, 2500);

      return context;
    }],
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
