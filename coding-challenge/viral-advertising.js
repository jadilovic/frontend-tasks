/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
	// Write your code here
	let cumulative = 2;
	let liked = 2;
	for (let i = 0; i < n - 1; i++) {
		const shared = liked * 3;
		liked = Math.floor(shared / 2);
		cumulative += liked;
	}
	return n < 1 ? 0 : cumulative;
}

console.log(viralAdvertising(5));
