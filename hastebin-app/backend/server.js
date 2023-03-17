const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');

const app = express();

app.use(express.json());
app.use(cors());

const getWebsite = async () => {
	const response = await axios('https://www.klix.ba/');
	const html = response.data;
};

// getWebsite();

app.get('/', (req, res) => {
	// res.status(200).json({ message: 'Hello World' });
	axios('https://www.vijesti.ba')
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			const articles = [];
			const divs = [];
			$('.side-article-title', html).each(function () {
				const html1 = $(this).html().trim();
				const title = $(this).text().trim();
				const url = $(this).find('a').attr('href').trim();
				divs.push(html1);
				// articles.push({
				// 	title,
				// 	url,
				// });
			});
			//	res.status(200).json(articles);
			res.send(divs);
		})
		.catch((error) => console.log(error.message));
});

app.listen(5000, () => {
	console.log('Server is running on port 5000');
});
