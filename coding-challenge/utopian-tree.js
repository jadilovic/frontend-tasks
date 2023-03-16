/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
	// Write your code here
	let grow = 0;
	for (let i = 0; i <= n; i++) {
		if (i % 2 === 0) {
			grow += 1;
		} else {
			grow *= 2;
		}
	}
	return grow;
}

console.log(utopianTree(4));
