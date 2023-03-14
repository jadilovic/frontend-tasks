const express = require('express');
const { ROLE, users, projects } = require('./data');
const projectsRouter = require('./routes/projects');
const { authUser, authRole } = require('./authBasic');
const app = express();

const setUser = (req, res, next) => {
	const userId = parseInt(req.body.userId);
	if (userId) {
		const user = users.find((user) => user.id === userId);
		req.user = user;
	}
	next();
};

app.use(express.json());
app.use(setUser);
app.use('/projects', authUser, projectsRouter);

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Home Page' });
});

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
	res.status(200).json({ message: 'Admin Page' });
});

app.get('/dashboard', authUser, (req, res) => {
	res.status(200).json({ message: 'Dashboard Page' });
});

app.listen(5000, (req, res) => {
	console.log('Server is listening at port 5000');
});
