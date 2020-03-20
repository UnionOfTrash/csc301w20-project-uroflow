module.exports = function (app) {
  setTimeout(async () => {
    const usersService = app.service("users");
    const usersList = await usersService.find();
    if (usersList.length == 0) {
      await usersService.create({
        username: "default_clinician",
        password: "default_clinician",
        role: 1,
        initialized: true
      });
      await usersService.create({
        username: "default_patient",
        password: "default_patient",
        role: 0,
        initialized: true
      });
    }
  }, 2000);
};
