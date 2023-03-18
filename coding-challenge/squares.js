/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(a, b) {
	// Write your code here
	const squaresArr = [];
	const recursion = () => {
		if (Math.sqrt(a) === parseInt(Math.sqrt(a))) {
			squaresArr.push(a);
		}
		a++;
		if (a <= b) {
			recursion();
		}
	};
	recursion();
	console.log(squaresArr);
	return squaresArr.length;

	// let count = 0,
	// 	root = 0;
	// for (let i = a; i <= b; i++) {
	// 	root = parseInt(Math.sqrt(i));
	// 	console.log(root, 'test', i);
	// 	if (root * root == i) {
	// 		count++;
	// 		break;
	// 	}
	// }

	// for (let i = root + 1; i * i <= b; i++) {
	// 	count++;
	// }
	// return count;
}

console.log(squares(17, 24));
