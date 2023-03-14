const authUser = (req, res, next) => {
	if (req.user === undefined) {
		return res.status(403).json({ message: 'You need to log in' });
	} else {
		next();
	}
};

const authRole = (role) => {
	return (req, res, next) => {
		const user = req.user;
		if (user.role === role) {
			return next();
		}
		res
			.status(401)
			.json({ message: 'You have no permission to access Admin Page' });
	};
};

module.exports = { authUser, authRole };
