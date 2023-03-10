function maxCost(cost, labels, dailyCount) {
	// Write your code here
	let sum = 0;
	let count = 0;
	const arr = [];
	for (let i = 0; i < cost.length; i++) {
		sum += cost[i];
		if (labels[i] === 'legal') {
			count++;
		}
		if (count === dailyCount) {
			arr.push(sum);
			sum = 0;
			count = 0;
		}
	}

	if (arr.length < 1) {
		return 0;
	}
	return Math.max(...arr);
}

console.log(maxCost([2], ['illegal'], 1));
