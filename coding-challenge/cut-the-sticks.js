/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr) {
	// Write your code here
	const sortedArr = arr.sort((a, b) => a - b);
	const countingArr = [];
	const recursion = (arr) => {
		console.log(arr);
		countingArr.push(arr.length);
		const min = arr[0];
		const newArr = arr.filter((item) => item > min).map((item) => item - min);
		if (newArr.length > 0) {
			recursion(newArr);
		}
	};
	recursion(sortedArr);
	return countingArr;
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
