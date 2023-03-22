/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER r_q
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */

function queensAttack(n, k, r_q, c_q, obstacles) {
	// Write your code here
	let possible_moves = 0;

	const startposes = [0, 1, 2, 3, 4, 5, 6, 7];
	const x_y_change = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
		[1, 1],
		[-1, -1],
		[-1, 1],
		[1, -1],
	];

	for (let i = 0; i < startposes.length; i++) {
		let is_valid = true;
		while (is_valid) {
			startposes[i] += x_y_change[i];
			startposes[i + 1] += x_y_change[i + 1];
		}
	}
	return possible_moves;
}
