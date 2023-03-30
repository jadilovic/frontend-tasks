/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
	// Write your code here
	const iteration = s.length / 3;
	let count = 0;
	for (let i = 0; i < s.length; i += 3) {
		if (s[i] !== 'S') {
			count++;
		}
		if (s[i + 1] !== 'O') {
			count++;
		}
		if (s[i + 2] !== 'S') {
			count++;
		}
	}
	return count;
}

console.log(marsExploration('SOSSPSSQSSOR'));
