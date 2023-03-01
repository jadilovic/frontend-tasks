"use strict";

var express = require('express');

var axios = require('axios');

var app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var VISUALCROSSING_API_KEY = process.env.VISUALCROSSING_API_KEY;
app.use(express.json());
app.use(express["static"]('public')); // app.get('/', (req, res) => {
// 	res.json({ message: 'hello world' });
// });

app.post('/weather', function (req, res) {
  try {
    var searchName = req.body.name;
    var url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/".concat(searchName, "?unitGroup=metric&key=").concat(VISUALCROSSING_API_KEY, "&contentType=json");
    axios.get(url).then(function (data) {
      res.json(data.data);
    });
  } catch (error) {
    res.json({
      message: error.message
    });
  }
});
app.listen(5000, function () {
  console.log('Server is listening at port 5000');
});