function getMoneySpent(keyboards, drives, b) {
	/*
	 * Write your code here.
	 */
	let maxBudget = 0;
	for (let i = 0; i < keyboards.length; i++) {
		for (let j = 0; j < drives.length; j++) {
			const sumKD = keyboards[i] + drives[j];
			if (sumKD > maxBudget && sumKD <= b) {
				maxBudget = sumKD;
			}
		}
	}
	return maxBudget > 0 ? maxBudget : -1;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
