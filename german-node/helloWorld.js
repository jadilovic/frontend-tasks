const os = require('os');
const fs = require('fs');

console.log('Free space: ' + os.freemem() / 1000);

fs.mkdir('test-dir', dirCreated);

function dirCreated() {
	console.log('fs is working');
	fs.writeFile('./test-dir/story.txt', listNumbers(), fileCreated);
}

function listNumbers() {
	let str = '';
	for (let i = 0; i < 10; i++) {
		str += `${i} line\n`;
	}
	return str;
}

function fileCreated() {
	console.log('created text file');
}

fs.rename('./storyOut.txt', './test-dir/storyOut.txt', copySuccess);

function copySuccess() {
	console.log('Success Made');
}

fs.readdir('./test-dir', readingDir);

function readingDir(err, files) {
	console.log('read directory');
	console.log(files);
}
