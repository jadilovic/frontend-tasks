/*
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function beautifulTriplets(d, arr) {
	// Write your code here
	// const triplets = [];
	// for (let i = 0; i < arr.length - 2; i++) {
	// 	const triplet = [];
	// 	for (let j = i + 1; j < arr.length - 1; j++) {
	// 		for (let k = j + 1; k < arr.length; k++) {
	// 			const firstTest = arr[i] < arr[j] && arr[j] < arr[k];
	// 			const secondTest = arr[j] - arr[i] === arr[k] - arr[j];
	// 			const thirdTest = arr[k] - arr[j] === d;
	// 			console.log(firstTest, secondTest, thirdTest);
	// 			if (firstTest && secondTest && thirdTest) {
	// 				triplets.push([i, j, j + 1]);
	// 			}
	// 		}
	// 	}
	// }
	// return triplets.length;
	let c = 0;
	for (let i = 0; i < arr.length - 2; i++) {
		if (arr.includes(arr[i] + d) && arr.includes(arr[i] + 2 * d)) {
			c++;
		}
	}
	return c;
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));
