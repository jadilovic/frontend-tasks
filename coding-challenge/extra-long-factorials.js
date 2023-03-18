/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
	// Write your code here
	let total = BigInt(1);

	const recursion = (n) => {
		const nBig = BigInt(n);
		if (n > 0) {
			total *= nBig;
			recursion(--n);
		}
		return total;
	};

	recursion(n);
	console.log(BigInt(total).toString());
}

console.log(extraLongFactorials(25));
