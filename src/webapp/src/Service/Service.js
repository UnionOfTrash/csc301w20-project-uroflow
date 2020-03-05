import {getFakePatients, getFakeRecords} from "./FakeData"
import {authenticationService} from './Authentication'

export const Service = {

    getRecords,
    getPatients,
    authenticationService,
    getCurveData,

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
function getCurveData(cid){

    return new Promise((res,rej) => {
        const data = [
                [
                    0.13241234123,
                    3412332141431
                ],
                [
                    -1.324123123,
                    9.31289145914
                ]
            ]
        res(data)
    })
}