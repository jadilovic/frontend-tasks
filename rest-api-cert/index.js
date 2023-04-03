const axios = require('axios');

const getTotalGoals = async (team, year) => {
	const getGoals = (homeOrVisitor, games) => {
		return games.reduce((acc, curr) => {
			acc += Number(curr[homeOrVisitor]);
			return acc;
		}, 0);
	};

	const getData = async (location, page) => {
		return await axios({
			method: 'get',
			url: `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&${location}=${team}&page=${page}`,
		});
	};
	const response1 = await getData('team1', 1);
	const response2 = await getData('team2', 1);
	const homeGamesTotalPages = response1.data.total_pages;
	const visitorGamesTotalPages = response2.data.total_pages;

	const getGoalsData = async (totalPages, homeOrVisitor) => {
		const games = [];
		for (let i = 1; i <= totalPages; i++) {
			const pageGames = await getData(homeOrVisitor, i);
			games.push.apply(games, pageGames.data.data);
		}
		return games;
	};

	const homeGames = await getGoalsData(homeGamesTotalPages, 'team1');
	const visitorGames = await getGoalsData(visitorGamesTotalPages, 'team2');

	const homeGoals = getGoals('team1goals', homeGames);
	const visitorGoals = getGoals('team2goals', visitorGames);

	return homeGoals + visitorGoals;
};

const solution = async () => {
	const totalGoals = await getTotalGoals('Barcelona', 2011);
	console.log(totalGoals);
};

solution();
