const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Url = require('./models/urls');
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect(
	`mongodb+srv://${dbUser}:${dbPassword}@nodeexpressprojects.rwyie.mongodb.net/url-shortener?retryWrites=true&w=majority`,
	{ useNewUrlParser: true }
);

const db = mongoose.connection;

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 5000;

app.get('/', async (req, res) => {
	const shortUrls = await Url.find();
	res.render('index', { shortUrls: shortUrls });
});

app.post('/shortUrls', async (req, res) => {
	const url = await Url.create({
		longUrl: req.body.longUrl,
	});
	console.log(url);
	res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
	try {
		const url = await Url.findOne({ shortUrl: req.params.shortUrl });
		if (url === null) return res.sendStatus(404);
		url.clicks++;
		await Url.updateOne({ shortUrl: url.shortUrl }, { clicks: url.clicks });
		res.redirect(url.longUrl);
	} catch (error) {
		console.log('Error : ', error.message);
		res.sendStatus(500);
	}
});

app.listen(PORT, () => {
	try {
		db.once('open', () => console.log('Connected to the Mongo DB'));
		console.log('Server is listening at port : ' + PORT);
	} catch (error) {
		console.log('Error: ' + error.message);
	}
});
