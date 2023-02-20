/**
 * Write a function to determine if one String is
 * a case-insensitive anagram of another String
 */

let isAnagram = function (str1, str2) {
	// if (str1.length === str2.length) {
	// 	let anagram = true;
	// 	str1.split('').forEach((letter) => {
	// 		if (!str2.includes(letter)) {
	// 			console.log(letter, str2.includes(letter));
	// 			anagram = false;
	// 		}
	// 	});
	// 	return anagram;
	// }
	// return false;
	const strSor1 = str1.split('').sort().join('').toLowerCase();
	const strSor2 = str2.split('').sort().join('').toLowerCase();

	if (strSor1 === strSor2) {
		return true;
	}
	return false;
};

console.log(isAnagram('hello', 'jello'));
console.log(isAnagram('hello', 'loelh'));

/**
 * Write a function to determine the largest difference
 * between any two numbers in an array of numbers
 */

let numbers = [12, 2, 5, 5, 6, 5, 9, 9, 9, 10, 33];

let difference = (function (arr) {
	console.log(arr);
	const newArr = [...new Set(arr)];
	const sorted = newArr.sort((a, b) => a - b);
	console.log(sorted);
	return Math.max(...newArr) - Math.min(...newArr);
})(numbers);

console.log(difference);

/**
 * Write a function to determine if the supplied string is a palindrome
 * Eg:  radar,  racecar, kayak, and redder are all palidromes
 * They are the spelled same backwards and forwards
 */

let palindrome = function (word) {
	console.log(word, word.split('').reverse().join('').toLowerCase());
	if (word.toLowerCase() === word.split('').reverse().join('').toLowerCase()) {
		return true;
	}
	return false;
};

console.log(palindrome('radar')); //true
console.log(palindrome('redder')); //true
console.log(palindrome('window')); //false

(function f1() {
	var a = 1,
		b = 1;
	var x = (y = 2);
})();
(function f2() {
	let j = 1,
		k = 1;
	let r = (s = 2);
})();

//what are the values for a, b, x, y, j, k, r, s in the global scope?
//which of these variables will exist on the window/global object?
console.log(global.s);
console.log(global.a);
console.log(global.b);
console.log(global.x);
console.log(global.y);
console.log(global.j);
console.log(global.k);
console.log(global.r);
