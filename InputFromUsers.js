const readline = require('readline-sync');


exports.getUserInput = function() {
    const name = readline.question("Please input your name: ");
    const surname = readline.question("Please input your surname: ");
    const annualSalary = readline.question("Please enter your annual salary: ");
    const superRate = readline.question("Please enter your super rate: ");
    const paymentStartDate = readline.question("Please input your payment start date: ");
    const paymentEndDate = readline.question("Please input your payment end date: ");

    return {
        firstName : name,
        lastName : surname,
        annualSalary : annualSalary,
        superRate : superRate,
        paymentStartDate : paymentStartDate,
        paymentEndDate : paymentEndDate
    };

};




