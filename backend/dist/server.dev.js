"use strict";

// const http = require('http');
// const server = http.createServer((req, res) => {
// 	res.write('Hello World');
// 	res.end();
// });
// server.listen(5000, () => {
// 	console.log('Listening at port 5000');
// });
var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.status(200).json({
    message: 'Hello World'
  });
});
app.listen(5000, function () {
  console.log('Listen at port 5000');
});