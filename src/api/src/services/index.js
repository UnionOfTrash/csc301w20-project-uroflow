const users = require("./users/users.service");
const records = require("./records/records.service");

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(records);
};
