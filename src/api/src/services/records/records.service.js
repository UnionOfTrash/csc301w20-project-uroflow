// Initializes the `records` service on path `/records`
const Records = require("./records.class");
const createModel = require("../../models/records.model");
const hooks = require("./records.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    // paginate: app.get("paginate")
  };

  // Initialize our service with any options it requires
  app.use("/records", new Records(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("records");

  service.hooks(hooks);
};
