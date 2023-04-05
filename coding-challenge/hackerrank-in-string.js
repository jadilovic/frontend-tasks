/*
 * Complete the 'hackerrankInString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function hackerrankInString(s) {
	// Write your code here
	const hr = 'hackerrank';
	let index = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === hr[index]) {
			index++;
		}
		if (index === hr.length - 1) {
			return 'YES';
		}
	}
	return 'NO';
}

console.log(hackerrankInString('hereiamstackerrank'));
console.log(hackerrankInString('hackerworld'));
