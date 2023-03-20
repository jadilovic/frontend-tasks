/*
 * Complete the 'libraryFine' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1
 *  2. INTEGER m1
 *  3. INTEGER y1
 *  4. INTEGER d2
 *  5. INTEGER m2
 *  6. INTEGER y2
 */

function libraryFine(d1, m1, y1, d2, m2, y2) {
	// Write your code here
	let fine = 0;
	if (y1 > y2) {
		fine = 10000 * (y1 - y2);
		return fine;
	} else if (y1 === y2 && m1 > m2) {
		fine = 500 * (m1 - m2);
		return fine;
	} else if (y1 === y2 && m1 === m2 && d1 > d2) {
		fine = 15 * (d1 - d2);
		return fine;
	} else {
		return fine;
	}
}

console.log(libraryFine(9, 6, 2015, 6, 6, 2015));
