// function createData(id, num, recentUpdate) {
//     return { id, num, recentUpdate };
// }
// function createData2(id, time, imageURL, leak, poop, urgent) {
//     return { id, time, imageURL, leak, poop, urgent };
// }

// user = {
//     "id":"37ece188-0d4e-415a-887a-8eeda4f761d8",
//     "userName":"Even",
//     "password":"even",
//     "role":0
// }

// patients: [{
//     "id":"37ece188-0d4e-415a-887a-8eeda4f761d8",
//     "studyId":"1234567890",
//     "numRecord":10,
//     "dob": "2010-10-10",
//     "hasNew":true,
//     "gender": "Male",
//     "condition": "die"
// },
// {
//     "id":"7c7f3fa1-12a9-4025-938a-668e0fb2739f",
//     "studyId":"1234567891",
//     "numRecord":20,
//     "dob": "2010-10-01",
//     "hasNew":true,
//     "gender": "Famale",
//     "condition": "wanna die"
// }]

// record = {
//     "id": "4dc68e17-7b8c-4ff2-a67a-c2f21d5d8979",
//     "audioId": "57110c8b-44c5-48b5-95d1-1091430a7b84",
//     "condition": [true, false , false],
//     "curveId": "08cd6b86-4f56-43a4-a706-f957cd53d7c4",
//     "time": "2019-10-10 22:10:01",
//     "pComment": "good!",
//     "cComment": "sooo Good!"
// }

const Data = {
    patients:[
        {
            "id":"37ece188-0d4e-415a-887a-8eeda4f761d8",
            "studyId":"1234567890",
            "numRecord":2,
            "dob": "2010-10-10",
            "hasNew":true,
            "gender": "Male",
            "condition": "die"
        },
        {
            "id":"7c7f3fa1-12a9-4025-938a-668e0fb2739f",
            "studyId":"1234567891",
            "numRecord":1,
            "dob": "2010-10-01",
            "hasNew":true,
            "gender": "Famale",
            "condition": "wanna die"
        },
        {
            "id":"7c7f3fa1-12a9-4025-938a-668e0fb2739a",
            "studyId":"0234567892",
            "numRecord":2,
            "dob": "2010-10-20",
            "hasNew":false,
            "gender": "Male",
            "condition": "dont wanna die"
        },
        {
            "id":"7c7f3fa1-12a9-4025-938a-668e0fb27391",
            "studyId":"0234567893",
            "numRecord":1,
            "dob": "2010-10-01",
            "hasNew":true,
            "gender": "Famale",
            "condition": "wanna die"
        },
        {
            "id":"7c7f3fa1-12a9-4025-938a-668e0fb27392",
            "studyId":"1234567894",
            "numRecord":2,
            "dob": "2010-10-20",
            "hasNew":false,
            "gender": "Male",
            "condition": "dont wanna die"
        },
        {
            "id":"7c7f3fa1-12a9-4025-938a-668e0fb27393",
            "studyId":"0234567895",
            "numRecord":1,
            "dob": "2010-10-01",
            "hasNew":true,
            "gender": "Famale",
            "condition": "wanna die"
        },
        {
            "id":"7c7f3fa1-12a9-4025-938a-668e0fb27394",
            "studyId":"1234567896",
            "numRecord":2,
            "dob": "2010-10-20",
            "hasNew":false,
            "gender": "Male",
            "condition": "dont wanna die"
        }
    ],

    records:[
        {
            pid : "1234567890",
            rec : [{
                "id": "4dc68e17-7b8c-4ff2-a67a-c2f21d5d8970",
                "audioId": "57110c8b-44c5-48b5-95d1-1091430a7b84",
                "condition": [true, false , false],
                "curveId": "08cd6b86-4f56-43a4-a706-f957cd53d7c4",
                "time": "2019-10-10 22:10:01",
                "pComment": "1 good!",
                "cComment": "sooo Good!"
            },

            {
                "id": "4dc68e17-7b8c-4ff2-a67a-c2f21d5d8971",
                "audioId": "57110c8b-44c5-48b5-95d1-1091430a7b84",
                "condition": [true, false , false],
                "curveId": "08cd6b86-4f56-43a4-a706-f957cd53d7c4",
                "time": "2019-10-10 22:10:01",
                "pComment": "2 good!",
                "cComment": "sooo Good!"
            }]
        },
        {
            pid:"1234567891",
            rec:[{
                "id": "4dc68e17-7b8c-4ff2-a67a-c2f21d5d8972",
                "audioId": "57110c8b-44c5-48b5-95d1-1091430a7b84",
                "condition": [true, false , false],
                "curveId": "08cd6b86-4f56-43a4-a706-f957cd53d7c4",
                "time": "2019-10-10 22:10:01",
                "pComment": "1 good!",
                "cComment": "sooo Good!"
                }]
        },
        {
            pid:"0234567892",
            rec: [{
                "id": "4dc68e17-7b8c-4ff2-a67a-c2f21d5d8973",
                "audioId": "57110c8b-44c5-48b5-95d1-1091430a7b84",
                "condition": [true, false , false],
                "curveId": "08cd6b86-4f56-43a4-a706-f957cd53d7c4",
                "time": "2019-10-10 22:10:01",
                "pComment": "1 good!",
                "cComment": "sooo Good!"
            },
            {
                "id": "4dc68e17-7b8c-4ff2-a67a-c2f21d5d8974",
                "audioId": "57110c8b-44c5-48b5-95d1-1091430a7b84",
                "condition": [true, false , false],
                "curveId": "08cd6b86-4f56-43a4-a706-f957cd53d7c4",
                "time": "2019-10-10 22:10:01",
                "pComment": "2 good!",
                "cComment": "sooo Good!"
            }]
        },
        {
            pid:"0234567893",
            rec: [{
                "id": "4dc68e17-7b8c-4ff2-a67a-c2f21d5d8973",
                "audioId": "57110c8b-44c5-48b5-95d1-1091430a7b84",
                "condition": [true, false , false],
                "curveId": "08cd6b86-4f56-43a4-a706-f957cd53d7c4",
                "time": "2019-10-10 22:10:01",
                "pComment": "1 good!",
                "cComment": "sooo Good!"
            },
            {
                "id": "4dc68e17-7b8c-4ff2-a67a-c2f21d5d8974",
                "audioId": "57110c8b-44c5-48b5-95d1-1091430a7b84",
                "condition": [true, false , false],
                "curveId": "08cd6b86-4f56-43a4-a706-f957cd53d7c4",
                "time": "2019-10-10 22:10:01",
                "pComment": "2 good!",
                "cComment": "sooo Good!"
            }]
        },
        {
            pid:"1234567894",
            rec: [{
                "id": "4dc68e17-7b8c-4ff2-a67a-c2f21d5d8973",
                "audioId": "57110c8b-44c5-48b5-95d1-1091430a7b84",
                "condition": [true, false , false],
                "curveId": "08cd6b86-4f56-43a4-a706-f957cd53d7c4",
                "time": "2019-10-10 22:10:01",
                "pComment": "1 good!",
                "cComment": "sooo Good!"
            },
            {
                "id": "4dc68e17-7b8c-4ff2-a67a-c2f21d5d8974",
                "audioId": "57110c8b-44c5-48b5-95d1-1091430a7b84",
                "condition": [true, false , false],
                "curveId": "08cd6b86-4f56-43a4-a706-f957cd53d7c4",
                "time": "2019-10-10 22:10:01",
                "pComment": "2 good!",
                "cComment": "sooo Good!"
            }]
        },
        {
            pid:"0234567895",
            rec: [{
                "id": "4dc68e17-7b8c-4ff2-a67a-c2f21d5d8973",
                "audioId": "57110c8b-44c5-48b5-95d1-1091430a7b84",
                "condition": [true, false , false],
                "curveId": "08cd6b86-4f56-43a4-a706-f957cd53d7c4",
                "time": "2019-10-10 22:10:01",
                "pComment": "1 good!",
                "cComment": "sooo Good!"
            },
            {
                "id": "4dc68e17-7b8c-4ff2-a67a-c2f21d5d8974",
                "audioId": "57110c8b-44c5-48b5-95d1-1091430a7b84",
                "condition": [true, false , false],
                "curveId": "08cd6b86-4f56-43a4-a706-f957cd53d7c4",
                "time": "2019-10-10 22:10:01",
                "pComment": "2 good!",
                "cComment": "sooo Good!"
            }]
        },
        {
            pid:"1234567896",
            rec: [{
                "id": "4dc68e17-7b8c-4ff2-a67a-c2f21d5d8973",
                "audioId": "57110c8b-44c5-48b5-95d1-1091430a7b84",
                "condition": [true, false , false],
                "curveId": "08cd6b86-4f56-43a4-a706-f957cd53d7c4",
                "time": "2019-10-10 22:10:01",
                "pComment": "1 good!",
                "cComment": "2 sooo Good!"
            },
            {
                "id": "4dc68e17-7b8c-4ff2-a67a-c2f21d5d8974",
                "audioId": "57110c8b-44c5-48b5-95d1-1091430a7b84",
                "condition": [true, false , false],
                "curveId": "08cd6b86-4f56-43a4-a706-f957cd53d7c4",
                "time": "2019-10-10 22:10:01",
                "pComment": "1 good!",
                "cComment": "2 sooo Good!"
            }]
        },
        
    ]
}

function getFakePatients(){
    return Data.patients
}

function getFakeRecords(sid){
    return Data.records.filter(r => r.pid === sid)[0].rec
}

let id = "012341241234124123"

function addFakePatient(data){
    const studyId = data.studyId
    console.log(Data)
    if (!(Data.patients.map(p => p.studyId).includes(studyId))){
        id = String(parseInt(id)+1)

        Data.patients.push({
            "id":id,
            "studyId":data.studyId,
            "numRecord":0,
            "dob": data.selectedDate,
            "hasNew":false,
            "gender": data.gender,
            "condition": data.condition
        })
        return 1
        
    }else{
        return -1
    }


}

export { getFakePatients, getFakeRecords , addFakePatient}