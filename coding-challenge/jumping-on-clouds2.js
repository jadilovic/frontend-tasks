/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
	// Write your code here
	let jumps = 0;
	let currentIndex = 0;
	const recursion = () => {
		const oneJumpValid = c[currentIndex + 1] !== 1;
		const twoJumpsValid = c[currentIndex + 2] !== 1;
		if (twoJumpsValid) {
			jumps++;
			currentIndex += 2;
		} else {
			jumps++;
			currentIndex++;
		}
		console.log('test', currentIndex);
		if (currentIndex < c.length - 1) {
			recursion();
		}
	};
	recursion();
	return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
