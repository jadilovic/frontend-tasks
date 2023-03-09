function compareTriplets(a, b) {
	let countA = 0;
	let countB = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i] > b[i]) {
			countA++;
		} else if (a[i] < b[i]) {
			countB++;
		} else {
			countA++;
			countB++;
		}
	}
	console.log(countA, countB);
	return [countA, countB];
}

compareTriplets([17, 28, 30], [99, 16, 8]);

function aVeryBigSum(ar) {
	// Write your code here
	const sum = ar.reduce((acc, curr) => {
		acc += curr;
		return acc;
	}, 0);
	return sum;
}

console.log(
	aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);
