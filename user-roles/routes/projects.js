const express = require('express');
const { projects, ROLE } = require('../data');
const {
	getProject,
	authDeleteProject,
	projectsView,
	authProjectUser,
} = require('../authProjects');

const route = express.Router();

route.get('/', projectsView(ROLE.ADMIN), (req, res) => {
	res.status(200).json(projects);
});

route.get(
	'/:projectId',
	authProjectUser(ROLE.ADMIN),
	getProject,
	(req, res) => {
		const project = req.project;
		res.status(200).json({ message: project });
	}
);

route.delete('/:projectId', authDeleteProject, getProject, (req, res) => {
	const project = req.project;
	res.status(200).json({ message: 'Project DELETED', project });
});

module.exports = route;
