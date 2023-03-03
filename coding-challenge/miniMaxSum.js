function miniMaxSum(arr) {
	// Write your code here
	const sortedArr = arr.sort((a, b) => a - b);
	const getSum = (arr, startingValue) => {
		return arr.reduce((prev, curr) => {
			return prev + curr;
		}, startingValue);
	};

	console.log(
		getSum(sortedArr, -sortedArr[sortedArr.length - 1]),
		getSum(sortedArr, -sortedArr[0])
	);
}

miniMaxSum([4, 2, 3, 5, 1]);
