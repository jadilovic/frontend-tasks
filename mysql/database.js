const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql
	.createPool({
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE,
	})
	.promise();

async function getNotes() {
	const [rows] = await pool.query('SELECT * FROM notes');
	return rows;
}
// getNotes();

const getNote = async (id) => {
	const [note] = await pool.query(
		`
    SELECT * FROM notes WHERE id = ?
  `,
		[id]
	);
	return note[0];
};
// getNote(2);

const createNote = async (title, contents) => {
	const [note] = await pool.query(
		`INSERT INTO notes (title, contents) VALUES (?, ?)`,
		[title, contents]
	);
	const noteId = note.insertId;
	const newNote = await getNote(noteId);
	return newNote;
};

module.exports = { createNote, getNote, getNotes };

//createNote('boy', 'playing');
