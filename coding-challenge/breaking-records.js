function breakingRecords(scores) {
	// Write your code here
	let min = scores[0];
	let max = scores[0];
	let minCount = 0;
	let maxCount = 0;
	// for (let i = 1; i < scores.length; i++) {
	// 	if (scores[i] < min) {
	// 		min = scores[i];
	// 		minCount++;
	// 	}
	// 	if (scores[i] > max) {
	// 		max = scores[i];
	// 		maxCount++;
	// 	}
	// }
	scores.forEach((score) => {
		if (score < min) {
			min = score;
			minCount++;
		}
		if (score > max) {
			max = score;
			maxCount++;
		}
	});
	return [maxCount, minCount];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
