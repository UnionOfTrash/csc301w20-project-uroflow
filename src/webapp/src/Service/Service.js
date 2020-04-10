import { Authentication } from './Authentication'
const URL = process.env.REACT_APP_API_URL;

export const Service = {
    Authentication,
    getRecords,
    getPatients,
    getCurveData,
    addPatient,
    updatePatientNewRecord,
    updateCComment,
}

function getPatients(){

    const url = URL + "patients"

    return fetch(url,{
        method: 'GET', 
        headers: {
            'Authorization': "Bearer " + window.localStorage.getItem("token"), 
            'Content-Type': 'application/json'
        }
    }).then(res => {
        // console.log(res)
        if(res.status === 401){
            // Do something here -> logout
            return Promise.reject("401: Unauthorized")
        }

        if (res.status === 200){
            return res.json()
        }else{
            return Promise.reject("failed to fetch patients from server")
        }

    }).then(res => {
        return res
    })
}

function getRecords(id){

    // return Promise.resolve(
    //     [{
    //         "id": "ed4485c1-4e3e-48e8-bd7c-6695d966f06e",
    //         "condition": [
    //         true,
    //         false,
    //         true
    //         ],
    //         "pcomment":  "SOME_WORDS",
    //         "ccomment":  "SOME_WORDS",
    //         "patient_id": "test_patient",
    //         "createdAt": "2010-10-11",
    //         "updatedAt": "2020-01-02"
    //     }]
    // )

    // url needs a param patient-id fetch the records for that patient
    //  TODO: replace this when records are ready to fetch
    const url = URL + "records/?patient_id=" + id

    return fetch(url, {
        method:"GET",
        headers:{
            'Authorization': "Bearer " + window.localStorage.getItem("token"), 
            'Content-Type': 'application/json'
        }
    }).then(res => {

        if(res.status === 401){
            return Promise.reject(401)
        }

        if (res.status === 200){
            return res.json()
        }else{
            return Promise.reject("failed to fetch from server")
        }

    })
}

function getCurveData(uri){

    const data = uri.split(',')[1]

    let buff = Buffer.from(data, 'base64');
    let text = buff.toString('utf-8');
    text = text.split('\n')

    const curve = {
        data:[],
        label:[]
    }

    for (let i = 1; i < text.length; i++){
        const data = text[i].split(',')
        curve.data.push(data[1])
        curve.label.push(data[2])
    }

    return Promise.resolve(curve)
}

function addPatient(data){
    
    const url = URL + "patients"
    
    return fetch(url, {
        method:"POST",
        headers:{
            'Authorization': "Bearer " + window.localStorage.getItem("token"), 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),

    }).then(res => {

        if(res.status === 401){
            return Promise.reject(401)
        }

        if (res.status === 201){
            return Promise.resolve("success")
        }else{
            return Promise.reject("failed to post to server")
        }

    }).then(res => {
        return res
    })
}

function updatePatientNewRecord(hasNew, pid){
    const url = URL + 'patients/' + pid
    const data = {"has_new" : hasNew}
    return fetch(url, {
        method:"PATCH",
        headers:{
            'Authorization': "Bearer " + window.localStorage.getItem("token"), 
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }).then(res => {
        if(res.status === 401){
            return Promise.reject(401)
        }

        if (res.status === 200){
            return Promise.resolve("success")
        }else{
            return Promise.reject("failed to patch to server")
        }
    })
}

function updateCComment(recordId, cComment) {
    const url = URL + "records/" + recordId
    const data = {"ccomment": cComment}
    return fetch(url, {
        method:"PATCH",
        headers: {
            'Authorization': "Bearer " + window.localStorage.getItem("token"), 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),

    }).then(res => {

        if(res.status === 401){
            return Promise.reject(401)
        }

        if (res.status === 200){
            return Promise.resolve("success")
        }else{
            return Promise.reject("failed to patch to server")
        }

    })
}

