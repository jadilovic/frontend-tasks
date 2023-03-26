/*
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c
 *  3. INTEGER m
 */

function chocolateFeast(n, c, m) {
	// Write your code here
	let totalChocolate = 0;
	let wrappersCount = 0;
	let wrappersRemain = 0;

	const recursion = (chocolateCount) => {
		totalChocolate += chocolateCount;
		wrappersCount = chocolateCount;
		wrappersCount += wrappersRemain;
		if (wrappersCount >= m) {
			wrappersRemain = wrappersCount % m;
			recursion(Math.floor(wrappersCount / m));
		}
	};

	recursion(Math.floor(n / c));
	return Math.ceil(totalChocolate);
}

console.log(chocolateFeast(7, 3, 2));
