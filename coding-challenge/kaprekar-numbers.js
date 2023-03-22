/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
	// Write your code here
	const numbers = [];
	for (let i = p; i <= q; i++) {
		const sqr = i * i;
		const digitLength = i.toString().length;
		const strNum = sqr.toString();
		const leftNum = strNum.substring(0, strNum.length - digitLength);
		const rightNum = strNum.substring(strNum.length - digitLength);
		console.log(leftNum, rightNum);
		console.log(strNum.length, i, sqr);
		const sum = parseFloat(leftNum) + parseInt(rightNum);
		if (sum === i || i === 1) {
			numbers.push(i);
		}
	}
	return numbers;
}

console.log(kaprekarNumbers(1, 100));
