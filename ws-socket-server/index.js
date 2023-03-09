// const { log } = require('console');
// const express = require('express');
// const app = express();

// const http = require('http').Server(app);

// const io = require('socket.io')(http, {
// 	cors: { cors: '*' },
// });

// io.on('connection', (socket) => {
// 	console.log('connection');
// 	socket.on('message', (message) => {
// 		console.log(message.id);
// 		io.emit('message', `${message.id.substr(0, 2)} said ${message}`);
// 	});
// });

// http.listen(8080, () => {
// 	console.log('Server is listening at port 8080');
// });

const http = require('http').createServer();

const io = require('socket.io')(http, {
	cors: { origin: '*' },
});

io.on('connection', (socket) => {
	console.log('a user connected');

	socket.on('message', (message) => {
		console.log(message);
		io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
	});
});

http.listen(8080, () => console.log('listening on http://localhost:8080'));
