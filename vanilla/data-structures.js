const isPalindrome = (num) => {
	const reverseNum = Number(num.toString().split('').reverse().join(''));
	return num === reverseNum;
};

console.log(isPalindrome(21));

const fibonacciNumbers = [0, 1];
const fibonacci = (n) => {
	// if (n < 2) {
	// 	return n;
	// }
	// if (fibonacciNumbers.length <= n) {
	// 	const nextNumber =
	// 		fibonacciNumbers[fibonacciNumbers.length - 2] +
	// 		fibonacciNumbers[fibonacciNumbers.length - 1];
	// 	fibonacciNumbers.push(nextNumber);
	// 	fibonacci(n);
	// }
	// console.log(fibonacciNumbers);
	// return fibonacciNumbers[fibonacciNumbers.length - 1];
	if (n <= 1) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log('final: ', fibonacci(5));

const isAnagram = (word1, word2) => {
	if (word1.length !== word2.length) return false;
	const obj1 = {};
	const obj2 = {};
	for (let i = 0; i < word1.length; i++) {
		obj1[word1[i]] ? obj1[word1[i]]++ : (obj1[word1[i]] = 1);
		obj2[word2[i]] ? obj2[word2[i]]++ : (obj2[word2[i]] = 1);
	}

	for (const key in obj1) {
		if (obj1[key] !== obj2[key]) return false;
		return true;
	}
	console.log(obj1, obj2);
	// const sorted1 = word1.split('').sort().join('');
	// const sorted2 = word2.split('').sort().join('');
	// return sorted1 === sorted2;
};

console.log(isAnagram('anagram', 'nagafram'));
