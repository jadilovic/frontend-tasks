console.log('day 2 test');
function flippingMatrix(matrix) {
	// Write your code her

	let n = matrix.length / 2;
	let total = 0;
	let max = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			max = Number.MIN_VALUE;
			max = Math.max(matrix[i][j], max);
			max = Math.max(matrix[i][n * 2 - j - 1], max);
			max = Math.max(matrix[n * 2 - i - 1][j], max);
			max = Math.max(matrix[n * 2 - i - 1][n * 2 - j - 1], max);
			total += max;
		}
	}

	return total;
}

console.log(
	flippingMatrix([
		[107, 54, 128, 15],
		[12, 75, 110, 138],
		[100, 96, 34, 85],
		[75, 15, 28, 112],
	])
);

// console.log(
// 	flippingMatrix([
// 		[112, 42, 83, 119],
// 		[56, 125, 56, 49],
// 		[15, 78, 101, 43],
// 		[62, 98, 114, 108],
// 	])
// );
