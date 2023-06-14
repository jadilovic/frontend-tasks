const fs = require('fs');

const filePath = './sampleData.csv';

fs.readFile(filePath, 'utf8', (error, csvData) => {
	if (error) {
		console.error('Error reading CSV file:', error);
		return;
	}

	// Split the CSV data by newlines
	const rows = csvData.split('\n');

	// Extract the header row to get the property names
	const headers = rows[0].split(',');

	// Remove the header row from the rows array
	rows.shift();

	// Create an empty array to store the objects
	const dataArr = [];

	// Process each row of data and create objects
	rows.forEach((row) => {
		const rowData = row.split(',');
		const obj = {};

		// Assign values to object properties using the headers
		headers.forEach((header, index) => {
			obj[header] = rowData[index];
		});

		// Add the object to the array
		dataArr.push(obj);
	});

	console.log('CSV data parsed successfully');
	console.log(dataArr);
});
