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
function getCurveData(cid){

    return new Promise((res,rej) => {
        setTimeout(() => {
            const data = [
                [
                    0, 
                    1, 
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14, 
                    15, 
                    16, 
                    17, 
                    18, 
                    19, 
                    20
                ],
                [
                    0, 
                    0.13, 
                    0.13, 
                    8.26, 
                    14.09, 
                    14.95, 
                    17.23, 
                    11.85, 
                    2.10, 
                    13.76, 
                    42.70, 
                    20.78, 
                    21.89, 
                    13.76, 
                    1.74, 
                    20.58, 
                    23.45, 
                    9.27, 
                    0.49, 
                    0, 
                    0
                ]
            ]
            res(data)

        }, 1500)
        
    })
}