const users = require("./users/users.service");
const patients = require("./patients/patients.service");
const records = require("./records/records.service");
const audio = require("./audio/audio.service");
const curve = require("./curve/curve.service");
const upload = require("./upload/upload.service");

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(patients);
  app.configure(audio);
  app.configure(curve);
  app.configure(records);
  app.configure(upload);
};
