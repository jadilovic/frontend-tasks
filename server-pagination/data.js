const users = Array.from({ length: 20 }, (_, i) => {
	return {
		name: `name${i}`,
		id: i,
	};
});

const posts = Array.from({ length: 20 }, (_, i) => {
	return {
		name: `post${i}`,
		id: i,
	};
});

module.exports = { users, posts };
