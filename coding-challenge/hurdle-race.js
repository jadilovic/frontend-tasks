/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
	// Write your code here
	const neededDoses = height.reduce((acc, curr) => {
		if (curr > k) {
			acc > curr - k ? acc : (acc = curr - k);
		}
		return acc;
	}, 0);
	return neededDoses;
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
