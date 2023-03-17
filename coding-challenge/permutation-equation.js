/*
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function permutationEquation(p) {
	// Write your code here
	let count = 0;
	const ar = [];

	for (let i = 0; i < p.length; i++) {
		count++;
		let x = p.indexOf(count) + 1;
		ar.push(p.indexOf(x) + 1);
	}
	return ar;
}

console.log(permutationEquation([4, 3, 5, 1, 2]));
