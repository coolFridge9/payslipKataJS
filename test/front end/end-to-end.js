const getGeneralInput = require("../indexForWebsite").getGeneralInput;

it("test", () => {
    const result = getGeneralInput("jordan", "elley", "4345756", "4", "may", "june");
    const expected =" ";
    expect(result).toBe(expected);
});