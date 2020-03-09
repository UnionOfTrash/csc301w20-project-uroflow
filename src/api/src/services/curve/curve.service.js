// Initializes the `curve` service on path `/curve`
const Curve = require("./curve.class");
const createModel = require("../../models/curve.model");
const hooks = require("./curve.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate")
  };

  // Initialize our service with any options it requires
  app.use("/curve", new Curve(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("curve");

  service.hooks(hooks);
};
