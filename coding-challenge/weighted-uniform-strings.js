/*
 * Complete the 'weightedUniformStrings' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY queries
 */

function weightedUniformStrings(s, queries) {
	// Write your code here
	const max = Math.max(...queries);
	const alphaObject = {};
	for (let i = 1; i < 27; i++) {
		alphaObject[String.fromCharCode(i + 96)] = i;
	}

	// const subStringsObject = {};
	// subStringsObject[s[0]] = alphaObject[s[0]];
	let subString = [];
	const weights = [];
	weights.push(alphaObject[s[0]]);
	subString.push(s[0]);
	for (let i = 1; i < s.length; i++) {
		if (subString[subString.length - 1] === s[i]) {
			subString.push(s[i]);
			if (subString.length * alphaObject[s[i]] > max) {
				break;
			}
			// subStringsObject[subString.join('')] =
			// 	subString.length * alphaObject[s[i]];
			weights.push(subString.length * alphaObject[s[i]]);
		} else {
			subString = [];
			// subStringsObject[s[i]] = alphaObject[s[i]];
			weights.push(alphaObject[s[i]]);
			subString.push(s[i]);
		}
	}

	// const weights = Object.values(subStringsObject);
	const existQuery = queries.map((item) => {
		return weights.includes(item) ? 'Yes' : 'No';
	});
	// const alpha = Array.from(Array(26)).map((e, i) => i + 65);
	// const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
	// console.log(alphabet);
	// console.log(weights);
	return existQuery;
}

console.log(weightedUniformStrings('abbcccdddd', [1, 7, 5, 4, 15]));
