const { projects } = require('./data');

const getProject = (req, res, next) => {
	const projectId = parseInt(req.params.projectId);
	if (projectId) {
		const project = projects.find((project) => project.id === projectId);
		req.project = project;
		next();
	} else {
		res.status(404).json({ message: 'Not found project' });
	}
};

const authProjectUser = (role) => {
	return (req, res, next) => {
		const projectId = parseInt(req.params.projectId);
		const user = req.user;
		if (projectId === user.id || user.role === role) {
			return next();
		} else {
			return res.status(401).json({
				message: 'Not allowed to access this project id : ' + projectId,
			});
		}
	};
};

const projectsView = (role) => {
	return (req, res, next) => {
		if (req.user.role === role) {
			return next();
		} else {
			const allowedProjects = projects.filter(
				(project) => project.id === req.user.id
			);
			return res.status(200).json(allowedProjects);
		}
	};
};

const authDeleteProject = (req, res, next) => {
	if (req.user.id === parseInt(req.params.projectId)) {
		next();
	} else {
		res.status(401).json({
			message:
				'Not allowed to deleted this project id : ' + req.params.projectId,
		});
	}
};

module.exports = {
	getProject,
	authDeleteProject,
	projectsView,
	authProjectUser,
};
