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

      const patientsService = app.service("patients");
      await patientsService.create({
        "study_id": "test_patient",
        "dob": "2020-01-01",
        "sex": "Male",
        "condition": "all_good"
      });
    }
  }, 2000);
};
