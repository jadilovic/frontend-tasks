/*
 * Complete the 'insertionSort2' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort2(n, arr) {
	// Write your code here
	// console.log(arr);
	// for (let i = 1; i < arr.length; i++) {
	// 	let current = i;
	// 	for (let j = i - 1; j >= 0; j--) {
	// 		if (arr[j] > arr[current]) {
	// 			let temp = arr[current];
	// 			arr[current] = arr[j];
	// 			arr[j] = temp;
	// 		}
	// 	}
	// 	current -= 1;
	// 	console.log(...arr);
	// }
	for (let i = 1; i < n; i++) {
		let k = i;
		for (let j = i - 1; j >= 0; j--) {
			if (arr[k] < arr[j]) {
				let temp = arr[j];
				arr[j] = arr[k];
				arr[k] = temp;
			}
			k -= 1;
		}
		console.log(...arr);
	}
}

insertionSort2(6, [1, 4, 3, 5, 6, 2]);
