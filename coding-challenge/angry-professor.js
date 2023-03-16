/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
	// Write your code here
	const onTime = a.reduce((acc, curr) => {
		if (curr <= 0) {
			acc++;
		}
		return acc;
	}, 0);
	if (onTime >= k) {
		return 'NO';
	} else {
		return 'YES';
	}
}

console.log(angryProfessor(3, [-1, -3, 4, 2]));
