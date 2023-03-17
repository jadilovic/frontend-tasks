/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */

function circularArrayRotation(a, k, queries) {
	// Write your code here
	for (let i = 0; i < k; i++) {
		const right = a.pop();
		a.unshift(right);
	}
	const values = queries.map((item) => {
		return a[item];
	});
	return values;
}

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));
