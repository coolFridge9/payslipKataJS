const numberValidators = require("../numberValidators");

describe.each`
number                 | expected          | testReason
${0}                   | ${true}           | ${"return true for 0"}
${15001}               | ${true}           | ${"return true for a random number"}
${0.001}               | ${true}           | ${"return true for a decimal"}
${-1}                  | ${false}          | ${"return false for a negative number"}
${"a"}                 | ${false}          | ${"return false for a string"}


`("validatePositiveNumber should ", ({number, expected, testReason}) => {
    it(testReason, () => {
        const result = numberValidators.isPositiveNumber(number);
        expect(result).toBe(expected);
    });
});

describe.each`
number                 | expected          | testReason
${0}                   | ${true}           | ${"return true for 0"}
${100}                 | ${true}           | ${"return true for 100"}
${15001}               | ${false}          | ${"return false for a random number over 100"}
${0.001}               | ${true}           | ${"return true for a decimal"}
${-1}                  | ${false}          | ${"return false for a negative number"}
${"a"}                 | ${false}          | ${"return false for a string"}


`("isValidPercentage should ", ({number, expected, testReason}) => {
    it(testReason, () => {
        const result = numberValidators.isValidPercentage(number);
        expect(result).toBe(expected);
    });
});