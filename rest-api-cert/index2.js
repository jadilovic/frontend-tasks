const axios = require('axios');

const getNumDraws = async (year) => {
	const getData = async (goals) => {
		return await axios({
			method: 'get',
			url: `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1goals=${goals}&team2goals=${goals}&page=1`,
		});
	};

	let count = 0;
	for (let i = 0; i < 11; i++) {
		const response = await getData(i);
		const { data } = response;
		count += data.total;
	}
	return count;
};

const getDraws = async () => {
	const draws = await getNumDraws(2011);
	console.log(draws);
};

getDraws(2011);
