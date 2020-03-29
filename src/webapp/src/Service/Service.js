import { Authentication } from './Authentication'
import { readRemoteFile } from 'react-papaparse'
const URL = "https://uroflow.unionoftra.sh/api/"

export const Service = {
    Authentication,
    getRecords,
    getPatients,
    getCurveData,
    addPatient,
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
        console.log(res)
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

    return Promise.resolve(
        [{
            "id": "ed4485c1-4e3e-48e8-bd7c-6695d966f06e",
            "condition": [
            true,
            false,
            true
            ],
            "pcomment":  "SOME_WORDS",
            "ccomment":  "SOME_WORDS",
            "patient_id": "test_patient",
            "createdAt": "2010-10-11",
            "updatedAt": "2020-01-02"
        }]
    )

    // url needs a param patient-id fetch the records for that patient
    //  TODO: replace this when records are ready to fetch
    // const url = URL + "records"

    // return fetch(url, {
    //     method:"GET",
    //     headers:{
    //         'Authorization': "Bearer " + window.localStorage.getItem("token"), 
    //         'Content-Type': 'application/json'
    //     }
    // }).then(res => {

    //     if(res.status === 401){
    //         return Promise.reject(401)
    //     }

    //     if (res.status === 200){
    //         return res.json()
    //     }else{
    //         return Promise.reject("failed to fetch from server")
    //     }

    // })
}

function getCurveData(cid){

    const url = URL + "curve/" + cid + ".csv"
    const curve = {
        data:[],
        label:[]
    }
    let firstRow = true

    return new Promise((resolve, reject) => {
        readRemoteFile(
            url,
            {
                step: function(row) {
                    // skip the first row
                    if (firstRow){
                        firstRow = false
                    }else{
                        const data = row.data
                        curve.data.push(data[1])
                        curve.label.push(data[2])
                    }
                },
                complete: function(results) {
                    resolve(curve)
                }
            }
          )
    })
    
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

    }).then(res => {
        return res
    })
}

