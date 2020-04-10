module.exports = function (app) {
  setTimeout(async () => {
    const usersService = app.service("users");
    const patientsService = app.service("patients");
    const recordsService = app.service("records");

    // If database is empty
    if ((await usersService.find()).length == 0) {
      // load testing data
      const audioPrefix = "data:audio/wav;base64,";
      const fs = require("fs");
      const testAudio1 = fs.readFileSync("/usr/src/myapp/test/test1.wav");
      const testAudio2 = fs.readFileSync("/usr/src/myapp/test/test2.wav");

      // Init an administrator
      await usersService.create({
        username: process.env.ADMIN_USERNAME,
        password: process.env.ADMIN_PASSWORD,
        role: "admin",
        initialized: true
      });

      // Init a clinician
      await usersService.create({
        username: "test_clinician",
        password: "test_clinician",
        role: "clinician",
        initialized: true
      });

      // Init two patients with records
      const testPatient1 = await patientsService.create({
        study_id: "test_patient1",
        dob: "2020-01-02"
      });
      await usersService.patch(testPatient1.id, {
        password: "test_patient1",
        initialized: true
      });
      await recordsService.create({
        condition: [true, false, true],
        uri: audioPrefix + Buffer.from(testAudio1).toString("base64"),
        pcomment: "all_good",
        patient_id: testPatient1.id
      });

      const testPatient2 = await patientsService.create({
        study_id: "test_patient2",
        dob: "1999-05-31",
        sex: false,
        condition: "good"
      });
      await usersService.patch(testPatient2.id, {
        password: "test_patient2",
        initialized: true
      });
      await recordsService.create({
        condition: [false, false, true],
        uri: audioPrefix + Buffer.from(testAudio2).toString("base64"),
        pcomment: "sounds good",
        ccomment: "agreed",
        patient_id: testPatient2.id
      });
    }
  }, 2000);
};
