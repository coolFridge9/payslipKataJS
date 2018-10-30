exports.displayDataInText = function(processedUserData){
    let displayData = "\n" + "Your payslip has been generated: \n" +
        "\nName: "+ processedUserData.name +
        "\nPay Period: "+ processedUserData.payPeriod +
        "\nGross Income:" + processedUserData.grossIncome +
        "\nIncome Tax: " + processedUserData.tax +
        "\nNet Income: " + processedUserData.netIncome +
        "\nSuper: " + processedUserData.superContribution +
        "\n" + "Thank you for using MYOB!";

    return displayData;
};
