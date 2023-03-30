/*
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
	// Write your code here
	// const arrList = [];
	// for (let i = 0; i < s.length - 1; i++) {
	// 	const arr = [s[i]];
	// 	let isSecond = true;
	// 	for (let j = i + 1; j < s.length; j++) {
	// 		if (arr[arr.length - 1] !== s[j] && isSecond) {
	// 			arr.push(s[j]);
	// 			isSecond = false;
	// 		}
	// 		if (arr[arr.length - 2] === s[j] && !isSecond) {
	// 			arr.push(s[j]);
	// 		}
	// 	}
	// 	arrList.push(arr);
	// }
	// return Math.max(...arrList.map((arr) => arr.length));
	let max = 0;
	let arr = [...new Set(s)];
	let brr;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			brr = [...s].filter((v) => v == arr[i] || v == arr[j]);
			if (
				brr.every((v, i) => {
					return i % 2 ? v == brr[1] : v == brr[0];
				})
			) {
				max = Math.max(brr.length, max);
			}
		}
	}
	return max;
}

console.log(alternate('asvkugfiugsalddlasguifgukvsa'));
