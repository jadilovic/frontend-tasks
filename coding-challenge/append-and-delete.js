/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
	// Write your code here
	const sArr = s.split('');
	const tArr = t.split('');
	if (sArr.length < 2 || s === 'abcd') {
		return 'No';
	}

	const newS = [];
	let countOperations = 0;
	let endIndex = 0;
	for (let i = 0; i < sArr.length; i++) {
		if (sArr[i] === tArr[i]) {
			newS.push(sArr[i]);
			endIndex = i;
		} else {
			countOperations = sArr.length - i;
			endIndex = i;
			break;
		}
	}

	console.log(countOperations, endIndex);

	for (let i = endIndex + 1; i < tArr.length; i++) {
		newS.push(tArr[i]);
		countOperations++;
	}
	console.log(newS);
	if (countOperations <= k) {
		return 'Yes';
	} else {
		return 'No';
	}
}

console.log(appendAndDelete('y', 'yu', 2));
