const calculateTax = require("calculateTax").calculateTax;

exports.processUserDetails = function(userDetails){
    const name = processName(userDetails.firstName, userDetails.lastName);
    const payPeriod = getPayPeriod(userDetails.paymentStartDate, userDetails.paymentEndDate);
    const grossIncome = calculateGrossIncome(userDetails.annualSalary);
    const tax = calculateTax(userDetails.annualSalary);
    const netIncome = calculateNetIncome(grossIncome, tax);
    const superContribution = getSuper(netIncome, userDetails.superRate);

    return {
        name : name,
        payPeriod : payPeriod,
        grossIncome : grossIncome,
        tax : tax,
        netIncome : netIncome,
        superContribution : superContribution
    };
};

function processName(firstName, lastName){
    return firstName + " " + lastName;
}

function getPayPeriod(startDate, endDate){
    return startDate + " - " + endDate;
}

function calculateGrossIncome(annualSalary){
    return annualSalary/12.0;
}

function calculateNetIncome(grossIncome, incomeTax){
    return grossIncome - incomeTax;
}

function getSuper(netIncome, superRate) {
    return netIncome * superRate/100;
}

