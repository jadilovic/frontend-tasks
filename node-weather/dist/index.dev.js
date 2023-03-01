"use strict";

var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.json({
    message: 'hello world'
  });
});
app.listen(5000, function () {
  console.log('Server is listening at port 5000');
});