const calculateSuper = require("../src/calculateMonthlySuper").calculateMonthlySuper;

describe.each`
grossIncome            | superRate      | expected       | testReason
${0}                   | ${0}           | ${0}           | ${"0% of 0"}
${0}                   | ${9}           | ${0}           | ${"9% of 0"}
${0}                   | ${100}         | ${0}           | ${"100% of 0"}
${200000}              | ${0}           | ${0}           | ${"0% of 200000"}
${200000}              | ${5}           | ${10000}       | ${"5% of 200000"}
${200000}              | ${60}          | ${120000}      | ${"60% of 200000"}
${200000}              | ${100}         | ${200000}      | ${"100% of 200000"}
${2000.7}              | ${100}         | ${2001}        | ${"100% of 2000.7"}
${2000}                | ${99.99}       | ${2000}        | ${"100% of 2000.7"}


`("calculate tax function should work for ", ({grossIncome, superRate, expected, testReason}) => {
    it(testReason, () => {
        const result = calculateSuper(grossIncome, superRate);
        expect(result).toBe(expected);
    });
});