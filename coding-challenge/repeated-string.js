/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
	// Write your code here
	// let numRepeated = 0;
	// for (let i = 0; i < s.length; i++) {
	// 	if (s[i] === 'a') {
	// 		numRepeated++;
	// 	}
	// }
	// const timesString = n / s.length;
	// console.log(n % s.length);
	// console.log(timesString);
	// const numStrRepeated = Math.floor(timesString * numRepeated);
	// return numStrRepeated;

	// Write your code here
	function getACount(s) {
		const match = s.match(/a/g);
		return match ? match.length : 0;
	}

	const aCount = getACount(s);
	const residue = n % s.length;
	const baseCount = Math.floor(n / s.length) * aCount;

	if (residue === 0) {
		return baseCount;
	}

	const lastStr = s.substring(0, residue);
	const lastAcount = getACount(lastStr);

	return baseCount + lastAcount;
}

console.log(repeatedString('gfcaaaecbg', 547602));
