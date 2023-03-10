const User = require('./users');

const pagination = () => {
	return async (req, res, next) => {
		const page = parseInt(req.query.page);
		const limit = parseInt(req.query.limit);
		const startIndex = (page - 1) * limit;
		const endIndex = page * limit;
		const listCount = await User.countDocuments().exec();
		const results = {};
		if (startIndex > 0) {
			results.previous = {
				page: page - 1,
				limit: limit,
			};
		}
		if (endIndex < listCount) {
			results.next = {
				page: page + 1,
				limit: limit,
			};
		}
		// const paginatedUsers = list.slice(startIndex, endIndex);
		try {
			const paginatedUsers = await User.find()
				.limit(limit)
				.skip(startIndex)
				.exec();
			results.results = paginatedUsers;
			req.pagination = results;
			next();
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	};
};

module.exports = { pagination };
