const processUserDetails = require("../processUserDetails").processUserDetails;

it("check simple example", () => {
    const userDetails = {
        firstName : "Jordan",
        lastName : "Elley",
        annualSalary : parseFloat("12000"),
        superRate : parseFloat("9"),
        paymentStartDate : "may",
        paymentEndDate : "jan"
    };

    const result = processUserDetails(userDetails);
    const expected = {
        name : "Jordan Elley",
        payPeriod : "may - jan",
        grossIncome : 1000,
        tax : 0,
        netIncome : 1000,
        superContribution : 90
    };

    expect(result).toEqual(expected);

});

it("check model example", () => {
    const userDetails = {
        firstName : "John",
        lastName : "Doe",
        annualSalary : parseFloat("60050"),
        superRate : parseFloat("9"),
        paymentStartDate : "1 March",
        paymentEndDate : "31 March"
    };

    const result = processUserDetails(userDetails);
    const expected = {
        name : "John Doe",
        payPeriod : "01 March - 31 March",
        grossIncome : 5004,
        tax : 922,
        netIncome : 4082,
        superContribution : 450
    };

    expect(result).toEqual(expected);

});