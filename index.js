// Function to log the current timestamp in a file with a text message.
//
// Parameters:
// - logMessage: Text message to be logged.
//
// Returns:
// - Boolean.
//
const fs = require("fs");

module.exports = (...logMessage) => {
	const date = new Date(),
		timestamp = date.toISOString(),
		fileName = `${timestamp.split("T")[0]}.log`;
	let lineToWrite = `${timestamp} |`,
		counter = 0;
	for (const iterator of logMessage) {
		let typeofObject = typeof iterator,
			typeofObjectPadded = typeofObject.padEnd(14, " "),
			tempString = String();
		tempString = ` [Type of Object]: ${typeofObjectPadded} | [content]: ${
			typeofObject !== "string" ? JSON.stringify(iterator) : iterator
		}\n`;
		lineToWrite += String().padStart(counter == 0 ? 0 : 26, " ") + tempString;
		counter++;
	}

	fs.appendFile(fileName, lineToWrite, (err) => {
		if (err) {
			throw err;
		}
	});

	return true;
};
