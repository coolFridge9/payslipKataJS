const calculateTax = require("/Users/jordan.elley/code/payslipJS/calculateTax.js").calculateTax;

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
    return Math.round(annualSalary/12.0);
}

function calculateNetIncome(grossIncome, incomeTax){
    return Math.round(grossIncome - (incomeTax / 12));
}

function getSuper(netIncome, superRate) {
    return Math.round(netIncome * superRate/100);
}

