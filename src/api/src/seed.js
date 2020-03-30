const fs = require("fs");

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

      const testPatient1 = await patientsService.create({
        "study_id": "test_patient1",
        "dob": "2020-01-02"
      });
      await usersService.patch(testPatient1.id, {
        password: "test_patient1",
        initialized: true
      });
      const testAudio1 = fs.readFileSync("/usr/src/myapp/test/test1.wav");
      await recordsService.create({
        "condition": [true, false, true],
        "uri": "data:audio/wav;base64," + Buffer.from(testAudio1).toString("base64"),
        "pcomment": "all_good",
        "patient_id": testPatient1.id
      });

      const testPatient2 = await patientsService.create({
        "study_id": "test_patient2",
        "dob": "1999-05-31",
        "sex": false,
        "condition": "dying"
      });
      await usersService.patch(testPatient2.id, {
        password: "test_patient2",
        initialized: true
      });
      const testAudio2 = fs.readFileSync("/usr/src/myapp/test/test2.wav");
      await recordsService.create({
        "condition": [false, false, true],
        "uri": "data:audio/wav;base64," + Buffer.from(testAudio2).toString("base64"),
        "pcomment": "sounds not so good",
        "ccomment": "yeah agreed",
        "patient_id": testPatient2.id
      });
    }
  }, 2000);
};
