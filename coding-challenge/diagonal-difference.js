function diagonalDifference(arr) {
	// Write your code here
	let leftSum = 0;
	let rightSum = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (i === j) {
				leftSum += arr[i][j];
			}
			if (j + i === arr[i].length - 1) {
				rightSum += arr[i][j];
			}
			console.log(arr[i][j], 'i:' + i, 'j:' + j);
		}
	}
	return Math.abs(leftSum - rightSum);
}
console.log(
	diagonalDifference([
		[11, 2, 4],
		[4, 5, 6],
		[10, 8, -12],
	])
);
