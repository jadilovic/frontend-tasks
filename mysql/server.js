const express = require('express');
const { getNotes, getNote, createNote } = require('./database');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
	try {
		const notes = await getNotes();
		if (notes) {
			res.status(200).json(notes);
		} else {
			res.status(401).json({ message: 'No notes were found' });
		}
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: error.message });
	}
});

app.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const note = await getNote(id);
		if (note) {
			res.status(200).json(note);
		} else {
			res.status(400).json({ message: 'No note found' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.post('/', async (req, res) => {
	try {
		const { title, contents } = req.body;
		const newNote = await createNote(title, contents);
		if (newNote) {
			res.status(200).json(newNote);
		} else {
			res.status(400).json({ message: 'Body is missing some values' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.listen(5000, (error) => {
	if (error) {
		console.log(error.message);
	} else {
		console.log('Server is listening at port 5000');
	}
});
