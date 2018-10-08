exports.displayDataInText = function(processedUserData){
    console.log("Name:", processedUserData.name);
    console.log("Pay Period:", processedUserData.payPeriod);
    console.log("Gross Income:", processedUserData.grossIncome);
    console.log("Income Tax:", processedUserData.tax);
    console.log("Net Income:", processedUserData.netIncome);
    console.log("Super:", processedUserData.superContribution);


    console.log("\n" + "Thank you for using MYOB!");
};
