const userDetails = require("./src/InputFromUsers").getUserInput();
const processedUserDetails = require("./src/processUserDetails").processUserDetails(userDetails);
require("./src/DisplayData").displayDataInText(processedUserDetails);

