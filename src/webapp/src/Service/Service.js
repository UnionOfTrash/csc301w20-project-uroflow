import {getFakePatients, getFakeRecords, addFakePatient, getFakeCurveData} from "./FakeData"
import {Authentication} from './Authentication'

const URL = "https://uroflow.unionoftra.sh/api/"

const token = localStorage.getItem("token")

const getHeader = {
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
        headers: getHeader
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
        headers:getHeader
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

function addPatient(data){
    //console.log(data)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (addFakePatient(data) === 1){
                resolve("success")
            }
            
            else
            {
                reject("fail")
            }

        }, 0)
    })
}


function getCurveData(cid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(getFakeCurveData())

        }, 1500)
    })
}