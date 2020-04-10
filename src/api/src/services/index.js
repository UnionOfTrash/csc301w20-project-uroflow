const users = require("./users/users.service");
const patients = require("./patients/patients.service");
const records = require("./records/records.service");
const blob = require("./blob/blob.service");

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(patients);
  app.configure(records);
  app.configure(blob);
};
