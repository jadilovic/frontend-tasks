/*
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function camelcase(s) {
	// Write your code here
	let count = 1;

	for (let i = 0; i < s.length; i++) {
		if (s[i].toUpperCase() === s[i]) {
			count++;
		}
	}
	return count;
}

console.log(camelcase('twoAre'));
