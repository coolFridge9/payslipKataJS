const readline = require("readline-sync");
const validator = require("/Users/jordan.elley/code/payslipJS/numberValidators.js");


exports.getUserInput = function() {
    const name = readline.question("Please input your name: ");
    const surname = readline.question("Please input your surname: ");

    let annualSalary = readline.question("Please enter your annual salary: ");
    while(!validator.isPositiveNumber(annualSalary)) {
        console.log("error invalid value");
        annualSalary = readline.question("Please enter your annual salary: ");
    }

    let superRate = readline.question("Please enter your super rate: ");

    while(!validator.isValidPercentage(superRate)) {
        console.log("error invalid value");
        superRate = readline.question("Please enter your super rate: ");
    }

    const paymentStartDate = readline.question("Please input your payment start date: ");
    const paymentEndDate = readline.question("Please input your payment end date: ");

    return {
        firstName : name,
        lastName : surname,
        annualSalary : parseFloat(annualSalary),
        superRate : parseFloat(superRate),
        paymentStartDate : paymentStartDate,
        paymentEndDate : paymentEndDate
    };

};




