const express = require('express');
const app = express();
const { pagination } = require('./pagination');
const { users, posts } = require('./data');
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./users');

const mongoDBUser = process.env.MONGO_DB_USER;
const mongoDBPassword = process.env.MONGO_DB_PASSWORD;

mongoose.connect(
	`mongodb+srv://${mongoDBUser}:${mongoDBPassword}@nodeexpressprojects.rwyie.mongodb.net/pagination?retryWrites=true&w=majority`,
	{ useNewUrlParser: true }
);
const db = mongoose.connection;

app.get('/users', pagination(), (req, res) => {
	const results = req.pagination;
	res.json(results);
});

app.get('/posts', pagination(posts), (req, res) => {
	const results = req.pagination;
	res.json(results);
});

app.listen(5000, () => {
	try {
		db.on('error', () => console.log('Error connecting to the database'));
		db.once('open', async () => {
			if ((await User.countDocuments().exec()) > 0) return;
			const users = Array.from({ length: 20 }, (_, i) => {
				return User.create({ name: `name${i}` });
			});
			Promise.all(users).then(() => console.log('Added users'));
		});
	} catch (error) {
		console.log('Database error: ' + error.message);
	}
	console.log('Server is listening at port 5000');
});
