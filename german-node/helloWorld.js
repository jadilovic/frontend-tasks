const os = require('os');
const fs = require('fs');
const path = require('path');

console.log('Free space: ' + os.freemem() / 1000);

// fs.mkdir('test-dir', dirCreated);

// function dirCreated() {
// 	console.log('fs is working');
// 	fs.writeFile('./test-dir/hello.exc', listNumbers(), fileCreated);
// }

// function listNumbers() {
// 	let str = '';
// 	for (let i = 0; i < 10; i++) {
// 		str += `${i} line\n`;
// 	}
// 	return str;
// }

function fileCreated() {
	console.log('created text file');
}

// fs.rename('./storyOut.txt', './test-dir/storyOut.txt', copySuccess);

function copySuccess() {
	console.log('Success Made');
}

function newDirCreated() {
	console.log('New Dir Created');
}

function processFile(fileName) {
	const extension = path.extname(`./test-dir/${fileName}`);
	console.log('File extension is: ' + extension);
	fs.mkdir(`./test-dir/${extension}`, newDirCreated);
	fs.rename(
		`./test-dir/${fileName}`,
		`./test-dir/${extension}/${fileName}`,
		copySuccess
	);
}

fs.readdir('./test-dir', readingDir);

function readingDir(err, files) {
	console.log(files);
	files.forEach(processFile);
}
