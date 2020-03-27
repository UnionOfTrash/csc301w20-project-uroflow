// Initializes the `upload` blob service on path `/upload`
const hooks = require("./upload.hooks");

const blobService = require("feathers-blob");
const fs = require("fs-blob-store");

module.exports = function (app) {
  const blobStorage = fs(app.get("audio"));
  // Initialize our service with any options it requires
  app.use("/upload", blobService({Model: blobStorage}));

  // Get our initialized service so that we can register hooks
  const service = app.service("upload");

  service.hooks(hooks);
}
