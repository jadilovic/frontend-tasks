const users = Array.from(Array(5), (value, index) => {
	return {
		id: index + 1,
		name: 'name-' + index,
		isActive: index % 2 === 0,
		age: 'lastname ' + Math.floor(Math.random() * 70),
	};
});

const userNames = users.map((user) => user.name);
const activeUsers = users.filter((user) => user.isActive);
//const ageDescending = users.sort((a, b) => a.age - b.age);
const newUsersNames = users
	.filter((user) => user.age < 35)
	.sort((a, b) => a.age - b.age)
	.filter((user) => user.isActive)
	.map((user) => user.name);

console.log('Original users : ', users);
console.log(userNames);
console.log(activeUsers);
// console.log(ageDescending);
console.log(newUsersNames);

console.log(foo);
var foo = 5;

function counter() {
	let number = 0;
	return {
		increment: (value = 1) => {
			number += value;
		},
		getValue: () => {
			return number;
		},
	};
}

const myCounter = counter();
myCounter.increment();
myCounter.increment(6);
console.log(myCounter.getValue());

const privateSecret = () => {
	let secret = 'pass';
	return () => secret;
};

const password = privateSecret();
console.log(privateSecret.secret);
console.log(password());

const squareArea = () => {
	let area = 0;
	return {
		calculateArea: (value = 1) => (area = value * value),
		calculatePerimeter: (value = 1) => (area = value * 2),
		getArea: () => area,
	};
};

const geometry = squareArea();
geometry.calculateArea(6);
geometry.calculatePerimeter(5);
console.log(geometry.getArea());

// const multiply = (num1) => {
// 	return (num2) => {
// 		return num1 * num2;
// 	};
// };

const multiply = (num1) => (num2) => num1 * num2;

console.log(multiply(4)(2));

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6];

const addNewItems = (arr1, newItem) => {
	return [...arr1, newItem];
};

console.log(arr1);

const newArr = addNewItems(arr1, 9);

const arr3 = arr1.concat(arr2);

console.log(arr1);
console.log(newArr);
console.log(arr2);
console.log(arr3);

const user = users.find((user) => user.name === 'name-3');

// const userExists = (name, arr) => {
// 	const userExists = arr.find((user) => user.name === name);
// 	return Boolean(userExists);
// };

// const userExists = (name, arr) => arr.some((user) => user.name === name);

const userExists = (name, arr) => {
	const index = arr.findIndex((user) => user.name === name);
	return index > -1;
};

console.log(user);
console.log(userExists('name-9', users));

const arrDuplicates = [3, 4, 5, 6, 4, 3, 2, 4, 5, 7, 3, 4];

const objUnique = {};
const arrUnique = arrDuplicates.map((num) => {
	objUnique[num] = num;
});

console.log(Object.values(objUnique));

const uniqueArr = arrDuplicates.reduce((acc, curr) => {
	return acc.includes(curr) ? acc : [...acc, curr];
}, []);

console.log(uniqueArr);

const sortNumbers = arrDuplicates.sort((a, b) => a - b);
console.log(sortNumbers);

const sortedByAge = [...users];

sortedByAge.sort((a, b) => {
	const first = a.age.split(' ')[1];
	const second = b.age.split(' ')[1];
	return first < second ? -1 : 1;
});

console.log(users);
console.log(sortedByAge);

const secret = () => {
	const secretWord = 'hello';
	return () => secretWord;
	// return {
	// 	getSecret: () => secretWord,
	// };
};

const word = secret();
// console.log(word.getSecret());
console.log(word());

const objOne = { a: 3, b: 5 };
const clone1 = objOne;
const clone = { ...objOne };
const clone2 = Object.assign({}, clone);

console.log(clone === clone2);
clone.test = 4;
console.log(clone);
console.log(clone2);

const products = Array.from(Array(9), (value, index) => {
	return {
		name: 'Aki',
		age: 'done',
	};
});

console.log(products);

const hiding = () => {
	const secret = 'miau';

	return {
		getCat: () => {
			return secret;
		},
		getDog: () => {
			return 'wou';
		},
	};
};

const search = hiding();

console.log(search);

console.log(search.getCat());
console.log(search.getDog());

const curry = (a) => (b) => a + b;

console.log(curry(5)(7));

console.log(global.luckynumber);
global.luckynumber = 66;
console.log(global.luckynumber);

const word2 = 'Hello there';

const reverseString = (str) => str.split('').reverse().join('');

const longestWord = (sentence) => {
	const longest = sentence.split(' ').reduce((acc, curr) => {
		return acc.length < curr.length ? (acc = curr) : acc;
	}, '');
	return longest;
};

const reversedString = reverseString(word2);

console.log(reversedString);
console.log(word2);

console.log(longestWord('hello there guys and girlss have a good day'));

const isPalindrome = (str) => {
	const revStr = str.split('').reverse().join('');
	return revStr === str;
};

console.log(isPalindrome('bobo'));

const fibonacci = (n) => {
	const numArr = [0, 1];
	for (let index = 0; index < n; index++) {
		const nextNum = numArr[index] + numArr[index + 1];
		numArr.push(nextNum);
	}
	return numArr;
};

console.log(fibonacci(4));

const arrOfNumbers = fibonacci(4);

const total = arrOfNumbers.reduce((acc, curr) => (acc += curr), 0);

console.log(total);

const duplicatesArr = [3, 5, 2, 1, 2, 4, 6, 1, 8, 9, 7, 3, 4, 3];

const onlyDuplicates = (arr) => {
	const numObj = {};
	arr.forEach((element) => {
		numObj[element] ? numObj[element]++ : (numObj[element] = 1);
	});
	return Object.keys(numObj)
		.filter((key) => numObj[key] > 1)
		.map((number) => Number(number));
};

console.log(onlyDuplicates(duplicatesArr));

function twoSum(arr, targetSum) {
	const numMap = new Map();
	for (let i = 0; i < arr.length; i++) {
		const complement = targetSum - arr[i];
		if (numMap.has(complement)) {
			return [numMap.get(complement), i];
		}
		numMap.set(arr[i], i);
		console.log(numMap);
	}
	return [];
}

console.log(twoSum(duplicatesArr, 9));

const objArr = [
	{ name: 'aki', age: 44 },
	{ name: 'aki', age: 34 },
	{ name: 'aki', age: 24 },
	{ name: 'aki', age: 14 },
	{ name: 'aki', age: 54 },
];

function filterObjects(arr, condition) {
	return arr.filter(condition);
}

function greaterThan25(obj) {
	return obj.age > 25;
}

const olderObjects = filterObjects(objArr, greaterThan25);

console.log(olderObjects);

const obj1 = { name: 'aki', age: 44 };
const obj2 = { last: 'cuni', ball: 34 };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const sortedObjects = objArr.sort((a, b) => a.age - b.age);
console.log(sortedObjects);

function firstNonRepeated(str) {
	const objStr = {};
	str.split('').forEach((char) => {
		objStr[char] ? objStr[char]++ : (objStr[char] = 1);
	});
	for (const key in objStr) {
		if (objStr[key] === 1) {
			return key;
		}
	}
}

console.log(firstNonRepeated('what are youd doing there'));

class Stack {
	constructor() {
		this.items = [];
	}
	push(item) {
		this.items.push(item);
	}
	pop() {
		if (!this.isEmpty()) {
			return this.items.pop();
		}
		return null;
	}
	peek() {
		if (!this.isEmpty()) {
			return this.items[this.items.length - 1];
		}
		return null;
	}
	isEmpty() {
		return this.items.length === 0;
	}
}

const list = new Stack();
list.push('what');
list.push(99);
list.pop();
console.log(list.peek());

const secretWord = () => {
	const mySecret = '1234';
	return () => {
		return mySecret;
	};
};

const thisSecret = secretWord();

console.log(thisSecret());

function findVowels(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const vowelsCount = str.split('').reduce((acc, char) => {
		console.log(char);
		if (vowels.includes(char)) {
			console.log('included');
			return (acc += 1);
		}
		return acc;
	}, 0);
	return vowelsCount;
}

console.log(findVowels('addgregwo'));

const mostCommonlyOccuringString = (arr) => {
	const objStr = {};
	arr.forEach((element) => {
		objStr[element] ? objStr[element]++ : (objStr[element] = 1);
	});

	return Object.keys(objStr).sort((a, b) => objStr[b] - objStr[a])[0];
};

console.log(
	mostCommonlyOccuringString(['abc', 'ab', 'bc', 'de', 'bc', 'de', 'bc'])
);
