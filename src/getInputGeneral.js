const validator = require("./numberValidators.js");

exports.storeInput = function(name, surname, annualSalary, superRate, paymentStartDate, paymentEndDate) {
    return {
        firstName : name,
        lastName : surname,
        annualSalary : parseFloat(annualSalary),
        superRate : parseFloat(superRate),
        paymentStartDate : paymentStartDate,
        paymentEndDate : paymentEndDate
    };

};




