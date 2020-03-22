// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
        return [drivers[0], drivers[1]]
};

function returnLastTwoDrivers(drivers) {
        const n = drivers.length
        return [drivers[n-2], drivers[n-1]]
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer
    }
}

function fareDoubler(fare) {
    const output = createFareMultiplier(2)(fare);
    return output
}

function fareTripler(fare) {
    const output = createFareMultiplier(3)(fare);
    return output
}

function selectDifferentDrivers(drivers, selectFunction) {
    const output = selectFunction(drivers);
    return output
}


