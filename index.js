const userDetails = require("./src/inputFromUsers").getUserInput();
const processedUserDetails = require("./src/processUserDetails").processUserDetails(userDetails);
require("./src/displayData").displayDataInText(processedUserDetails);

