const calculateTax = require("./calculateTax.js").calculateTax;

exports.processUserDetails = function(userDetails){
    const name = processName(userDetails.firstName, userDetails.lastName);
    const payPeriod = getPayPeriod(userDetails.paymentStartDate, userDetails.paymentEndDate);
    const monthlyGrossIncome = calculateGrossMonthlyIncome(userDetails.annualSalary);
    const monthlyTax = calculateMonthlyTax(userDetails.annualSalary);
    const monthlyNetIncome = calculateMonthlyNetIncome(monthlyGrossIncome, monthlyTax);
    const monthlySuperContribution = getMonthlySuper(monthlyGrossIncome, userDetails.superRate);

    return {
        name : name,
        payPeriod : payPeriod,
        grossIncome : monthlyGrossIncome,
        tax : monthlyTax,
        netIncome : monthlyNetIncome,
        superContribution : monthlySuperContribution
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

