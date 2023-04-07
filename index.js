// Function to log the current timestamp in a file with a text message.
//
// Parameters:
// - logMessage: Text message to be logged.
//
// Returns:
// - Boolean.
//
const fs = require("fs");

module.exports = (logMessage) => {
	const date = new Date(),
		timestamp = date.toISOString(),
		fileName = `${timestamp.split("T")[0]}.log`,
		typeofObject = typeof logMessage,
		typeofObjectPadded = typeofObject.padEnd(14, " ");

	if (typeofObject !== "string") {
		try {
			logMessage = JSON.stringify(logMessage);
		} catch (error) {}
	}

	const lineToWrite = `${timestamp} | [Type of Object]: ${typeofObjectPadded} | [content]: ${logMessage}\n`;
	fs.appendFile(fileName, lineToWrite, (err) => {
		if (err) {
			throw err;
		}
	});

	return true;
};
