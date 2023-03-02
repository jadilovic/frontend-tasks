require('dotenv').config();
const mongoose = require('mongoose');

const mongoDBUser = process.env.MONGO_DB_USER;
const mongoDBPassword = process.env.MONGO_DB_PASSWORD;

mongoose.connect(
	`mongodb+srv://${mongoDBUser}:${mongoDBPassword}@nodeexpressprojects.rwyie.mongodb.net/?retryWrites=true&w=majority`,
	{ useNewUrlParser: true }
);
const db = mongoose.connection;

module.exports = { db };
