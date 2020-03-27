module.exports = function (app) {
  setTimeout(async () => {
    const usersService = app.service("users");
    const patientsService = app.service("patients");
    const recordsService = app.service("records");

    if ((await usersService.find()).length == 0) {
      await usersService.create({
        username: "test_clinician",
        password: "test_clinician",
        role: 1,
        initialized: true
      });

      const testPatient = await patientsService.create({
        "study_id": "test_patient",
        "dob": "2020-01-01",
        "sex": "Male",
        "condition": "all_good"
      });
      await usersService.patch(testPatient.id, {
        password: "test_patient",
        initialized: true
      });

      const fs = require("fs");
      const audio_file = fs.readFileSync("/usr/src/myapp/test/test.wav");
      await recordsService.create({
        "condition": [true, true, true],
        "uri": "data:audio/wav;base64," + Buffer.from(audio_file).toString("base64"),
        "pcomment": "all_good",
        "ccomment": "all_good",
        "patient_id": testPatient.id
      })
    }
  }, 2000);
};
