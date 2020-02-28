import {getFakeData, getFakeRecords} from "./FakeData"
import {authenticationService} from './Authentication'

export const Service = {

    getRecords,
    getPatients,
    authenticationService,

}

function getPatients(){
    return getFakeData().patients
}

function getRecords(id){
    return getFakeRecords(id)
}