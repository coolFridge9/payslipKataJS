const calculateMonthlyTax = require("./calculateMonthlyTax.js").calculateMonthlyTax;
const calculateMonthlySuper = require("./calculateMonthlySuper.js").calculateMonthlySuper;

exports.processUserDetails = function(userDetails){
    const name = processName(userDetails.firstName, userDetails.lastName);
    const payPeriod = getPayPeriod(userDetails.paymentStartDate, userDetails.paymentEndDate);
    const monthlyGrossIncome = getGrossMonthlyIncome(userDetails.annualSalary);
    const monthlyTax = calculateMonthlyTax(userDetails.annualSalary);
    const monthlyNetIncome = getMonthlyNetIncome(monthlyGrossIncome, monthlyTax);
    const monthlySuperContribution = calculateMonthlySuper(monthlyGrossIncome, userDetails.superRate);

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

function getGrossMonthlyIncome(annualSalary){
    return Math.round(annualSalary/12);
}

function getMonthlyNetIncome(grossIncome, incomeTax){
    return Math.round(grossIncome - incomeTax);
}


