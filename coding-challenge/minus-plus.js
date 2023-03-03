function plusMinus(arr) {
	// Write your code here
	const arrLength = arr.length;

	const positiveNums = arr.filter((num) => num > 0);
	const zeroNums = arr.filter((num) => num === 0);
	const negativeNums = arr.filter((num) => num < 0);

	[positiveNums, negativeNums, zeroNums].map((nums) =>
		console.log((nums.length / arrLength).toFixed(6))
	);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
