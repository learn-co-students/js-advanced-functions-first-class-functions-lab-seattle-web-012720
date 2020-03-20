// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArray){
    return driverArray.slice(0, 2)
}

const returnLastTwoDrivers = (driverArray) => {
    return driverArray.slice(-2)
} 

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 


function createFareMultiplier(multiplier) {
    return function(fare){
        return multiplier*fare
    }
}


const fareDoubler = createFareMultiplier(2)


const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driverArray, fcn){
    return fcn(driverArray)
}