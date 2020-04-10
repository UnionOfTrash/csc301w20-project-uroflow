module.exports = function (app) {
  setTimeout(async () => {
    const usersService = app.service("users");

    // If database is empty
    if ((await usersService.find()).length == 0) {
      // Init an administrator
      await usersService.create({
        username: process.env.ADMIN_USERNAME,
        password: process.env.ADMIN_PASSWORD,
        role: "admin",
        initialized: true
      });
    }
  }, 2000);
};
