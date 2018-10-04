const calculateTax = require("../calculateTax").calculateTax;

describe.each`
salary                 | expected       | testReason
${0}                   | ${0}           | ${"zero case lower bound"}
${15001}               | ${0}           | ${"zero case middle bound"}
${18200}               | ${0}           | ${"zero case upper bound"}
${18201}               | ${0.19}        | ${"second tax bracket lower bound"}
${18405}               | ${38.95}       | ${"second tax bracket middle bound"}
${37000}               | ${3572}        | ${"second tax bracket upper bound"}
${37001}               | ${3572.325}    | ${"third tax bracket lower bound"}
${60000}               | ${11047}       | ${"third tax bracket middle bound"}
${87000}               | ${19822}       | ${"third tax bracket upper bound"}
${87001}               | ${19822.37}    | ${"fourth tax bracket lower bound"}
${120000}              | ${32032}       | ${"fourth tax bracket middle bound"}
${180000}              | ${54232}       | ${"fourth tax bracket upper bound"}
${180001}              | ${54232.45}    | ${"highest tax bracket lower bound"}
${3000000}             | ${1323232}     | ${"highest tax bracket upper bound"}

`("calculate tax function should work for ", ({salary, expected, testReason}) => {
    it(testReason, () => {
        const result = calculateTax(salary);
        expect(result).toBe(expected);
    });
});