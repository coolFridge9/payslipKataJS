const calculateTax = require("../src/calculateMonthlyTax").calculateMonthlyTax;

describe.each`
salary                 | expected       | testReason
${0}                   | ${0}           | ${"zero case lower bound"}
${15001}               | ${0}           | ${"zero case middle bound"}
${18199}               | ${0}           | ${"zero case pre-upper bound"}
${18200}               | ${0}           | ${"zero case upper bound"}
${18201}               | ${0}           | ${"second tax bracket lower bound"}
${18405}               | ${3}           | ${"second tax bracket middle bound"}
${36999}               | ${298}         | ${"second tax bracket pre-upper bound"}
${37000}               | ${298}         | ${"second tax bracket upper bound"}
${37001}               | ${298}         | ${"third tax bracket lower bound"}
${60000}               | ${921}         | ${"third tax bracket middle bound"}
${86999}               | ${1652}        | ${"third tax bracket pre-upper bound"}
${87000}               | ${1652}        | ${"third tax bracket upper bound"}
${87001}               | ${1652}        | ${"fourth tax bracket lower bound"}
${120000}              | ${2669}        | ${"fourth tax bracket middle bound"}
${179999}              | ${4519}        | ${"fourth tax bracket pre-upper bound"}
${180000}              | ${4519}        | ${"fourth tax bracket upper bound"}
${180001}              | ${4519}        | ${"highest tax bracket lower bound"}
${3000000}             | ${110269}      | ${"highest tax bracket high bound"}

`("calculate tax function should work for ", ({salary, expected, testReason}) => {
    it(testReason, () => {
        const result = calculateTax(salary);
        expect(result).toBe(expected);
    });
});