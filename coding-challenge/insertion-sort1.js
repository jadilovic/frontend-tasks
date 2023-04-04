/*
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort1(n, arr) {
	// Write your code here
	const starting = arr[arr.length - 1];
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i - 1] > starting) {
			arr.splice(i, 1, arr[i - 1]);
			console.log(arr.join(' '));
		} else {
			arr.splice(i, 1, starting);
			console.log(arr.join(' '));
			break;
		}
	}
}

insertionSort1(14, [1, 3, 5, 9, 13, 22, 27, 35, 46, 51, 55, 83, 87, 23]);
