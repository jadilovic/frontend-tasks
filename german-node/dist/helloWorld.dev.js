"use strict";

var os = require('os');

var fs = require('fs');

var path = require('path');

console.log('Free space: ' + os.freemem() / 1000); // fs.mkdir('test-dir', dirCreated);
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
} // fs.rename('./storyOut.txt', './test-dir/storyOut.txt', copySuccess);


function copySuccess() {
  console.log('Success Made');
}

function newDirCreated() {
  console.log('New Dir Created');
}

function processFile(fileName) {
  var extension = path.extname("./test-dir/".concat(fileName));
  console.log('File extension is: ' + extension);
  fs.mkdir("./test-dir/".concat(extension), newDirCreated);
  fs.rename("./test-dir/".concat(fileName), "./test-dir/".concat(extension, "/").concat(fileName), copySuccess);
}

fs.readdir('./test-dir', readingDir);

function readingDir(err, files) {
  console.log(files);
  files.forEach(processFile);
}