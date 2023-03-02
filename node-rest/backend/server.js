const express = require('express');
const { db } = require('./db');
const subscribersRouter = require('./routes/subscribers');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.json({ message: 'Hello World' });
});

app.use('/subscribers', subscribersRouter);

app.listen(5000, () => {
	try {
		db.on('error', () => console.log('Error connecting to the database'));
		db.once('open', () => {
			console.log('Connection to MongoDB was successful');
			console.log('Server is listening at port 5000');
		});
	} catch (error) {
		console.log('There was some error: ' + error.message);
	}
});
