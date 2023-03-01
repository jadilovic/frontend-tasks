const express = require('express');
const axios = require('axios');
const app = express();

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const VISUALCROSSING_API_KEY = process.env.VISUALCROSSING_API_KEY;
app.use(express.json());
app.use(express.static('public'));

// app.get('/', (req, res) => {
// 	res.json({ message: 'hello world' });
// });

app.post('/weather', (req, res) => {
	try {
		const searchName = req.body.name;
		const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchName}?unitGroup=metric&key=${VISUALCROSSING_API_KEY}&contentType=json`;
		axios.get(url).then((data) => {
			res.json(data.data);
		});
	} catch (error) {
		res.json({ message: error.message });
	}
});

app.listen(5000, () => {
	console.log('Server is listening at port 5000');
});
