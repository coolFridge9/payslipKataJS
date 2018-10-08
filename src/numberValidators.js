function isPositiveNumber(number){
    if(isNaN(number)) {
        return false;
    }
    const comparableNum = parseFloat(number);
    return comparableNum >= 0;
}

function isValidPercentage(number){
    if(!isPositiveNumber(number)){
        return false;
    }
    const comparableNum = parseFloat(number);
    return comparableNum <= 100;
}

module.exports = {
    isPositiveNumber : isPositiveNumber,
    isValidPercentage : isValidPercentage
};