exports.calculateTax = function(salary){
    if(salary < 18201){
        return 0;
    } else if(salary < 37001){
        const dollarsOverTaxBracket = salary - 18200;
        const extraTax = dollarsOverTaxBracket * 0.19;
        const fixedTax = 18200;
        return fixedTax + extraTax;
    }
};