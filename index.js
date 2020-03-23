// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    let newArray = [array[0], array[1]]

    return newArray
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function (drivers, whichDrivers) {
    return whichDrivers(drivers);
}