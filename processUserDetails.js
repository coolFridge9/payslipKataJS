const calculateTax = require("/Users/jordan.elley/code/payslipJS/calculateTax.js").calculateTax;

exports.processUserDetails = function(userDetails){
    const name = processName(userDetails.firstName, userDetails.lastName);
    const payPeriod = getPayPeriod(userDetails.paymentStartDate, userDetails.paymentEndDate);
    const grossIncome = calculateGrossMonthlyIncome(userDetails.annualSalary);
    const monthlyTax = calculateMonthlyTax(userDetails.annualSalary);
    const netIncome = calculateMonthlyNetIncome(grossIncome, monthlyTax);
    const superContribution = getMonthlySuper(grossIncome, userDetails.superRate);

    return {
        name : name,
        payPeriod : payPeriod,
        grossIncome : grossIncome,
        tax : monthlyTax,
        netIncome : netIncome,
        superContribution : superContribution
    };
};

function processName(firstName, lastName){
    return firstName + " " + lastName;
}

function padDate(date) {
    const isNumber = require("./numberValidators").isPositiveNumber;
    if( isNumber(date[0]) && !isNumber(date[1]) ){
        date = "0" + date;
    }
    return date;
}

function getPayPeriod(startDate, endDate){
    return padDate(startDate) + " - " + padDate(endDate);
}

function calculateMonthlyTax(annualSalary){
    return Math.round(calculateTax(annualSalary)/12);
}

function calculateGrossMonthlyIncome(annualSalary){
    return Math.round(annualSalary/12.0);
}

function calculateMonthlyNetIncome(grossIncome, incomeTax){
    return Math.round(grossIncome - (incomeTax));
}

function getMonthlySuper(grossIncome, superRate) {
    return Math.round(grossIncome * superRate/100);
}

