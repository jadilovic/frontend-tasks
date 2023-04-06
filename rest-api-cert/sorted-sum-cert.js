/*
 * Complete the 'sortedSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function sortedSum(a) {
	// Write your code here
	const newA = a.sort((a, b) => a - b);
	// console.log(newA);
	// let count = 1;
	// let total = 0;
	// const arr = [];
	// for (let i = newA.length - 1; i >= 0; i--) {
	// 	let inter = [];
	// 	for (let j = i; j < newA.length; j++) {
	// 		inter.push(newA[j]);
	// 	}
	// 	arr.push(inter);
	// 	inter = [];
	// }

	// let sum = 0;

	// for (let i = 0; i < arr.length; i++) {
	// 	const total = arr[i].reduce((acc, curr, index) => {
	// 		acc += curr * (index + 1);
	// 		return acc;
	// 	}, 0);
	// 	sum += total;
	// }

	const sum = newA.reduce((acc, curr, index) => {
		// console.log(curr);
		acc += curr * (index + 1);
		return acc;
	}, a[0]);
	// console.log(sum % (Math.pow(10, 9) + 7));
	// console.log('modulo ', Math.pow(10, 9) + 7);
	return sum;
	// console.log(arr);
	// console.log(sum);
}

console.log(sortedSum([9, 5, 8]));
sortedSum([5, 9]);
sortedSum([
	747402, 380408, 605449, 846906, 385224, 31431, 677517, 770001, 389085, 40373,
	487560, 886252, 596334, 59083,
]);
console.log(sortedSum([4, 3, 2, 1]));
