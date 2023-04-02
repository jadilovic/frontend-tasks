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

console.log('-------------------------------------------------------');
const nums = [1, 7, 11, 44, 3, 15, 2];

const findIndexes = (nums, num) => {
	// for (let i = 0; i < nums.length; i++) {
	// 	for (let j = i; j < nums.length; j++) {
	// 		if (nums[i] + nums[j] === num) return [i, j];
	// 	}
	// }
	// return -1;
	const obj = {};
	// let first = [];
	for (let i = 0; i < nums.length; i++) {
		const key = nums[i];
		if (obj[num - key]) {
			return [obj[num - key], i];
		} else {
			obj[key] = i;
		}
	}

	// for (const key in obj) {
	// 	if (obj[num - Number(key)]) {
	// 		first.push(obj[num - Number(key)]);
	// 	}
	// }

	return first;
};

console.log(findIndexes(nums, 9));

console.log('-----------------------------------');

const stockTime = (arr) => {
	let maxProfit = 0;
	let min = arr[0];
	for (let i = 0; i < arr.length; i++) {
		// for (let j = i + 1; j < arr.length; j++) {
		// 	if (arr[j] - arr[i] > maxProfit) {
		// 		maxProfit = arr[j] - arr[i];
		// 	}
		// }
		if (arr[i] < min) min = arr[i];
		if (arr[i] - min > maxProfit) maxProfit = arr[i] - min;
	}
	return maxProfit;
};

const stocks = [7, 1, 5, 3, 6, 4];
const stocks2 = [7, 5, 3, 2, 1];

console.log(stockTime(stocks));

console.log('============================================================');

console.log('start');

const likeVideo = (video) => {
	setTimeout(() => {
		console.log(`You liked ${video}`);
	}, 2000);
};

const importantFunction = (message, cb, cb2) => {
	setTimeout(() => {
		cb(`Timeout finished: ${message}`, cb2('top gun'));
	}, 1);
};

const message = importantFunction(
	'Hello',
	(message) => {
		console.log(message);
	},
	likeVideo
);

const toDo = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(likeVideo);
	}, 3000);
});

const toDo2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(likeVideo);
	}, 1000);
});

// toDo.then((cb) => cb('terminator'));

const takeCare = async (name) => {
	const cb = await toDo;
	cb(name + 1);
	const cb2 = await toDo2;
	cb2(name + 2);
};

takeCare('matcho');

console.log('end');

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++');

const loadJson = async (url) => {
	// try {
	// 	const response = await fetch(url);
	// 	const data = await response.json();
	// 	console.log(data);
	// 	return data;
	// } catch (error) {
	// 	console.log(error.message);
	// }
	const response = await fetch(url);
	if (response.status === 200) {
		const data = await response.json();
		return data;
	} else {
		throw new Error(response.status);
	}
};

loadJson('https://fakeurl.com/no-such-user.json').catch((error) => {
	console.log(error.message);
});
