/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
	// Write your code here
	a.sort((a, b) => a - b);
	const arrArrs = [];
	for (let i = 0; i < a.length; i++) {
		let arr = [a[i]];
		for (let j = i + 1; j < a.length; j++) {
			if (a[i] === a[j] || a[i] + 1 === a[j] || a[i] - 1 === a[j]) {
				arr.push(a[j]);
			}
		}
		arrArrs.push(arr);
	}

	const maxLength = Math.max(...arrArrs.map((item) => item.length));

	return maxLength;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
