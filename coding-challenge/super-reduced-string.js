/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
	// Write your code here
	const sArr = s.split('');
	let newArr = [];
	const recursion = (arr) => {
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] === arr[i + 1]) {
				arr.splice(i, 2);
				newArr = [...arr];
				recursion(arr);
			}
		}
	};

	recursion(sArr);

	if (newArr.length < 1) {
		return 'Empty String';
	}

	return newArr.join('');
}

console.log(superReducedString('abbac'));
