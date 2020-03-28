import {getFakePatients, getFakeRecords, addFakePatient, getFakeCurveData} from "./FakeData"
import {Authentication} from './Authentication'
import { readRemoteFile } from 'react-papaparse'
const URL = "https://uroflow.unionoftra.sh/api/"

const token = localStorage.getItem("token")

const GETHeader = {
    'Authorization': "Bearer " + token, 
    'Content-Type': 'application/json'
}

const POSTHeader = {
    'Authorization': "Bearer " + token, 
    'Content-Type': 'application/json'
}

export const Service = {
    Authentication,
    getRecords,
    getPatients,
    getCurveData,
    addPatient,
}

function getPatients(){

    const url = URL + "patients"

    return fetch(url,{
        method: 'GET', 
        headers: GETHeader
    }).then(res => {

        if(res.status === 401){
            // Do something here -> logout
            return Promise.reject(401)
        }

        if (res.status === 200){
            return res.json()
        }else{
            return Promise.reject("failed to fetch from server")
        }

    }).then(res => {
        return res
    })
}

function getRecords(id){

    // url needs a param patient-id fetch the records for that patient
    const url = URL + "records"

    return fetch(url, {
        method:"GET",
        headers:GETHeader
    }).then(res => {

        if(res.status === 401){
            return Promise.reject(401)
        }

        if (res.status === 200){
            return res.json()
        }else{
            return Promise.reject("failed to fetch from server")
        }

    }).then(res => {
        return res
    })
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
    //console.log(data)
    // data {
    //     studyId: studyId,
    //     gender: gender,
    //     selectedDate: selectedDate,
    //     condition: condition
    // }

    
    const url = URL + "patients"
    
    return fetch(url, {
        method:"POST",
        headers:POSTHeader,
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

