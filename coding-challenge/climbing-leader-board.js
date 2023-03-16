/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
	// Write your code here
	const playerRanks = [];
	let newRanked = [...new Set(ranked)];
	for (let i = 0; i < player.length; i++) {
		newRanked.push(player[i]);
		newRanked = newRanked.sort((a, b) => b - a);
		const currRank = newRanked.indexOf(player[i]) + 1;
		playerRanks.push(currRank);
	}
	// const playerRanks = player.map((score) => {
	// 	ranked.push(score);
	// 	const newRanked = [...new Set(ranked)].sort((a, b) => b - a);
	// 	const currRank = newRanked.indexOf(score) + 1;
	// 	return currRank;
	// });

	const uniqueScores = [...new Set(ranked)];
	let aliceRanks = new Array(player.length).fill(uniqueScores.length + 1);
	let index = player.length - 1;

	const getIndex = (i) => {
		if (uniqueScores[i] <= player[index]) {
			aliceRanks[index] = i + 1;
			index -= 1;
			getIndex(i);
		}
	};

	for (let i = 0; i < uniqueScores.length; i++) {
		getIndex(i);
	}

	return aliceRanks;
	return playerRanks;
}

console.log(
	climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);
