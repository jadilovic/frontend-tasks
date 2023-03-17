/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

function saveThePrisoner(n, m, s) {
	// Write your code here
	const prisoner = (m + (s - 1)) % n;

	if (prisoner == 0) {
		return n;
	}

	return prisoner;

	// const mod = m % n;
	// return mod + (s - 1);
}

console.log(saveThePrisoner(7, 19, 2));
console.log(saveThePrisoner(3, 7, 3));
console.log(saveThePrisoner(5, 2, 1));
console.log(saveThePrisoner(5, 2, 2));
