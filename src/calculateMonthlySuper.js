exports.calculateMonthlySuper = function(grossIncome, superRate){
    return Math.round(grossIncome * superRate/100);
};