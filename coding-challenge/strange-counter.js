/*
 * Complete the 'strangeCounter' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER t as parameter.
 */

function strangeCounter(t) {
	// Write your code here
	// let x = 1;
	// let a = 3;
	// let y = 3;
	// while (y < t) {
	// 	a = a * 2;
	// 	x = y + 1;
	// 	y = x + (a - 1);
	// }
	// return a - (t - x);
	let time = 1;
	let value = 3;
	let y = 3;
	const recursion = () => {
		if (y < t) {
			value = value * 2;
			time = y + 1;
			y = time + (value - 1);
			recursion();
		}
	};
	recursion();
	return value - (t - time);
}

console.log(strangeCounter(17));
