/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
	// Write your code here
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let heightArr = [];
	for (let i = 0; i < word.length; i++) {
		heightArr.push(alphabet.indexOf(word[i]));
	}

	const maxHeight = heightArr.reduce((acc, curr) => {
		if (h[curr] > acc) {
			acc = h[curr];
		}
		return acc;
	}, 0);
	return maxHeight * word.length;
}

console.log(
	designerPdfViewer(
		[
			1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
			5,
		],
		'abc'
	)
);
