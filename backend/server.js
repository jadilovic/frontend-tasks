// const http = require('http');

// const server = http.createServer((req, res) => {
// 	res.write('Hello World');
// 	res.end();
// });

// server.listen(5000, () => {
// 	console.log('Listening at port 5000');
// });

const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Hello World' });
});

app.listen(5000, () => {
	console.log('Listen at port 5000');
});
