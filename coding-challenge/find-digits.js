/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
	// Write your code here
	const divisibleDigits = n
		.toString()
		.split('')
		.map((item) => {
			const numItem = parseInt(item);
			if (n % numItem === 0) {
				return item;
			}
		})
		.filter((item) => item !== undefined);
	return divisibleDigits.length;
}

console.log(findDigits(10));
