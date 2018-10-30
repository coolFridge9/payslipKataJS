function displayDataInText(processedUserData){
    let displayData = "\n" + "Your payslip has been generated: \n" +
        "\nName: "+ processedUserData.name +
        "\nPay Period: "+ processedUserData.payPeriod +
        "\nGross Income: " + processedUserData.grossIncome +
        "\nIncome Tax: " + processedUserData.tax +
        "\nNet Income: " + processedUserData.netIncome +
        "\nSuper: " + processedUserData.superContribution +
        "\n\n" + "Thank you for using MYOB!";

    return displayData;
}

function storeInput(name, surname, annualSalary, superRate, paymentStartDate, paymentEndDate) {
    return {
        firstName : name,
        lastName : surname,
        annualSalary : parseFloat(annualSalary),
        superRate : parseFloat(superRate),
        paymentStartDate : paymentStartDate,
        paymentEndDate : paymentEndDate
    };

}

function monthlyTaxForBracket(salary, previousTaxBracketMaxIncome, centsPerDollarOverFixedTax, fixedTaxForBracket) {
    const dollarsOverTaxBracket = salary - previousTaxBracketMaxIncome;
    const extraTax = dollarsOverTaxBracket * centsPerDollarOverFixedTax;
    const fixedTax = fixedTaxForBracket;
    return Math.round((extraTax + fixedTax)/12);
}

function calculateMonthlyTax(salary){
    if(salary < 18201){
        return 0;
    } else if(salary < 37001){
        return monthlyTaxForBracket(salary, 18200, 0.19, 0);
    } else if(salary < 87001){
        return monthlyTaxForBracket(salary, 37000, 0.325, 3572);
    } else if(salary < 180001){
        return monthlyTaxForBracket(salary, 87000, 0.37, 19822);
    } else{
        return monthlyTaxForBracket(salary, 180000, 0.45, 54232);
    }
}
function calculateMonthlySuper(grossIncome, superRate){
    return Math.round(grossIncome * superRate/100);
}

function processUserDetails(userDetails){
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
}

function processName(firstName, lastName){
    return firstName + " " + lastName;
}

function padDate(date) {
    const isNumber = isPositiveNumber;
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

function getGeneralInput(name, surname, annualSalary, superRate, paymentStartDate, paymentEndDate) {
    const userDetails = storeInput(name, surname, annualSalary, superRate, paymentStartDate, paymentEndDate);
    const processedUserDetails = processUserDetails(userDetails);
    return displayDataInText(processedUserDetails);

}

module.exports = {
    getGeneralInput: getGeneralInput,
};