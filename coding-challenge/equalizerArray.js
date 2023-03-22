/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizerArray(arr) {
	// Write your code here
	const count = {};
	arr.forEach((element) => {
		if (count[element]) {
			count[element]++;
		} else {
			count[element] = 1;
		}
	});
	let maxValue = 0;
	let maxKey = '';
	Object.keys(count).map((key) => {
		if (count[key] > maxValue) {
			maxValue = count[key];
			maxKey = key;
		}
	});
	const deletionsArr = arr.filter((item) => item !== parseInt(maxKey));
	return deletionsArr.length;
}

console.log(equalizerArray([3, 3, 2, 1, 3, 2, 2, 2, 3, 3, 3, 4]));
