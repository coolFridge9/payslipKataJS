function monthlyTaxForBracket(salary, previousTaxBracketMaxIncome, centsPerDollarOverFixedTax, fixedTaxForBracket) {
    const dollarsOverTaxBracket = salary - previousTaxBracketMaxIncome;
    const extraTax = dollarsOverTaxBracket * centsPerDollarOverFixedTax;
    const fixedTax = fixedTaxForBracket;
    return Math.round((extraTax + fixedTax)/12);
}

exports.calculateMonthlyTax = function(salary){
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
};