const calculateTax = require("../incomeTaxCalculator").calculateTax;

describe.each`
salary                 | expected       | testReason
${0}                   | ${0}           | ${"zero case lower bound"}
${15001}               | ${0}           | ${"zero case middle bound"}
${18200}               | ${0}           | ${"zero case upper bound"}
${18201}               | ${18200.19}    | ${"second tax bracket lower bound"}
${18405}               | ${18238.95}    | ${"second tax bracket middle bound"}
${37000}               | ${21772}       | ${"second tax bracket upper bound"}
${60050}               | ${922}         | ${"middle case"}

`("calculate tax function should work for ", ({salary, expected, testReason}) => {
    it(testReason, () => {
        const result = calculateTax(salary);
        expect(result).toBe(expected);
    });
});