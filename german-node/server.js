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

	// console.log('CSV data parsed successfully');
	// console.log(dataArr);
});

const arr = ['a', 'b', 'c', 'd'];
const newArr = arr.slice(1, 3);
arr.splice(2, 0, 'k', 'x', 'y');
console.log(arr, newArr);
const bob = 'Hello Bob';
const slBob = bob.slice(2, 4);
console.log(bob, slBob, 'me');
