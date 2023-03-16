/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
	// Write your code here
	// let count = 0;
	// for (let x = i; x <= j; x++) {
	// 	console.log(x);
	// 	const reverseX = parseInt(String(x).split('').reverse().join(''));
	// 	if (Math.abs(x - reverseX) % k === 0) {
	// 		count++;
	// 	}
	// }
	// return count;
	let count = 0;
	// Step 1.
	for (let x = i; x <= j; x++) {
		// Step 4.
		if (isBeautifulDay(x, k)) {
			count++;
		}
	}
	// Step 5.
	return count;
}

function isBeautifulDay(x, k) {
	// Step 3.
	return differenceOfReverse(x) % k === 0;
}

function differenceOfReverse(x) {
	let reversedX = parseInt(x.toString().split('').reverse().join(''));
	// Step 2.
	return Math.abs(x - reversedX);
}

console.log(beautifulDays(20, 23, 6));
