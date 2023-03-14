const ROLE = {
	ADMIN: 'admin',
	BASIC: 'basic',
};

const users = [
	{ id: 1, name: 'Mark', role: ROLE.ADMIN },
	{ id: 2, name: 'Aki', role: ROLE.BASIC },
	{ id: 3, name: 'Cuni', role: ROLE.BASIC },
];

const projects = [
	{ id: 1, name: 'Vranjska', userId: 1 },
	{ id: 2, name: 'Halkici', userId: 2 },
	{ id: 3, name: 'Cojluk', userId: 3 },
];

module.exports = { ROLE, users, projects };
