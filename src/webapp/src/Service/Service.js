import {getFakePatients, getFakeRecords, addFakePatient, getFakeCurveData} from "./FakeData"
import {Authentication} from './Authentication'

export const Service = {
    Authentication,
    getRecords,
    getPatients,
    getCurveData,
    addPatient,

}

function getPatients(){
    // return getFakePatients()
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const data = getFakePatients()
            resolve(data)
        }, 3000)
    })
}

function getRecords(id){

    // return getFakeRecords(id)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = getFakeRecords(id)
            resolve(data)

        }, 1000)
        
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