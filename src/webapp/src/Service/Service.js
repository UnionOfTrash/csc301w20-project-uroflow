import {getFakePatients, getFakeRecords} from "./FakeData"
import {authenticationService} from './Authentication'

export const Service = {

    getRecords,
    getPatients,
    authenticationService,

}

function getPatients(){
    // return getFakePatients()
    return new Promise((resolve, reject) => {
        const data = getFakePatients()
        resolve(data)
    })
}

function getRecords(id){

    // return getFakeRecords(id)
    return new Promise((resolve, reject) => {
        const data = getFakeRecords(id)
        resolve(data)
    })
}