exports.calculateTax = function(salary){
    if(salary < 18201){
        return 0;
    } else if(salary < 37001){
        const dollarsOverTaxBracket = salary - 18200;
        const extraTax = dollarsOverTaxBracket * 0.19;
        const fixedTax = 18200;
        return fixedTax + extraTax;
    } else if(salary < 87001){
        const dollarsOverTaxBracket = salary - 37000;
        const extraTax = dollarsOverTaxBracket * 0.325;
        const fixedTax = 37000;
        return fixedTax + extraTax;
    }
};