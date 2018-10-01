exports.calculateTax = function(salary){
    if(salary < 18201){
        return 0;
    } else if(salary < 37001){
        const dollarsOverTaxBracket = salary - 18200;
        const extraTax = dollarsOverTaxBracket * 0.19;
        const fixedTax = 0;
        return extraTax + fixedTax;
    } else if(salary < 87001){
        const dollarsOverTaxBracket = salary - 37000;
        let extraTax = dollarsOverTaxBracket * 0.325;
        const fixedTax = 3572;
        return fixedTax + extraTax;
    } else if(salary < 180001){
        const dollarsOverTaxBracket = salary - 87000;
        let extraTax = dollarsOverTaxBracket * 0.37;
        const fixedTax = 19822;
        return fixedTax + extraTax;
    } else{
        const dollarsOverTaxBracket = salary - 180000;
        let extraTax = dollarsOverTaxBracket * 0.45;
        const fixedTax = 54232;
        return fixedTax + extraTax;
    }
};