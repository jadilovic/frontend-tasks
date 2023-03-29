const sample = () => {
	const secret = 'mama mia';
	return (testing = () => {
		return secret;
	});
};

const boby = sample();

console.log(boby());

const obj = { a: 1, b: 2 };

const clone = { ...obj };

console.log(clone);

clone.a = 55;
clone.foo = 'aki';

console.log(clone, obj);

const clone2 = Object.assign({}, clone);
clone2.last = 'name';

console.log(clone, clone2);

const vowels = ['a', 'i', 'e', 'o', 'u'];
const string = 'bawaretambrre';
const getVowels = (str) => {
	return str
		.toLowerCase()
		.split('')
		.reduce((acc, curr) => (vowels.includes(curr) ? ++acc : acc), 0);
};

console.log(getVowels(string));

const words = 'Welcome to this JavaScript tutorial';

const reverseWords = (str) =>
	str
		.split(' ')
		.map((word) => word.split('').reverse().join(''))
		.join(' ');
console.log(reverseWords(words));

const stringsArr = [
	'bob',
	'mark',
	'aki',
	'mark',
	'cuni',
	'boby',
	'mark',
	'aki',
];

const mostCommonly = (arr) => {
	// const objStrings = {};
	// arr.forEach((item) =>
	// 	objStrings[item] ? objStrings[item]++ : (objStrings[item] = 1)
	// );
	// const mostCommon = { key: '', count: 0 };
	// Object.keys(objStrings).forEach((key) => {
	// 	if (objStrings[key] > mostCommon.count) {
	// 		mostCommon.key = key;
	// 		mostCommon.count = objStrings[key];
	// 	}
	// });
	// return mostCommon;
	const objCommon = arr.reduce((acc, curr) => {
		acc[curr] ? acc[curr]++ : (acc[curr] = 1);
		return acc;
	}, {});
	const mostCommon = Object.entries(objCommon).reduce(
		(acc, curr) => (acc[1] < curr[1] ? curr : acc),
		[null, 0]
	)[0];
	return mostCommon;
};

console.log(mostCommonly(stringsArr));

const addTo = (num1) => {
	return (num2) => {
		return num1 + num2;
	};
};

const adding = addTo(9);
console.dir(adding);
console.log(adding(6));

const testObj = {
	message: 'By by',
	getMessage: function (value) {
		const message = 'See see';
		return this.message + value;
	},
	findMessage: () => {
		const message = 'See see';
		return message;
	},
};

console.log(testObj.getMessage('testing'));
console.log(testObj.findMessage());
console.log('----------------------------------');

class Pet {
	constructor(name) {
		this.name = name;
	}

	getName = () => this.name;

	findName = function () {
		return this.name;
	};
}

const myPet = new Pet('boby');

console.log(myPet.findName(), myPet.getName(), myPet.name);

const basicConfig = { url: 'google.com' };

const extendConfig = (config) => {
	// return {
	// 	...config,
	// 	port: 5000,
	// };
	return Object.assign({}, basicConfig, { port: 5000 });
};

console.log(extendConfig(basicConfig));
console.log(basicConfig);

const newConfig = { ...basicConfig };
newConfig.count = 7;
console.log(newConfig);
console.log(basicConfig);

const bar = {
	boo: {
		soo: 'mimi',
	},
};

const baz = bar?.boo?.soo || 'default';

console.log(baz);
console.log('---------------------------------------');

const thenFunction = () => {
	return fetch('google.com')
		.then((response) => response.json())
		.then((data) => console.log(data));
};

const asyncFunction = async () => {
	try {
		const response = await fetch('google.com');
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error.message);
	}
};

asyncFunction();
console.log('-------------------------');

const isNumeric = (sText) => {
	const numbers = '0123456789.';
	for (let i = 0; i < sText.length; i++) {
		if (numbers.indexOf(sText[i]) < 0) {
			return false;
		}
	}
	return true;
	//	return !isNaN(sText);
};

console.log(isNumeric('34.4'));
console.log('----------------------------------');

const articleTitle = 'hello guys and boys';
const capitalize = articleTitle.charAt(0).toUpperCase() + articleTitle.slice(1);
const capitalizeWords = articleTitle
	.split(' ')
	.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
	.join(' ');

console.log(capitalizeWords);

console.log('--------------------------------------');

const multiply = (num1) => (num2) => (num3) => num1 * num2 * num3;
// {
// 	return (num2) => {
// 		return (num3) => {
// 			return num1 * num2 * num3;
// 		};
// 	};
// };

console.log(multiply(5)(5)(4));
console.log('_______________________________________');

const arrTest = [1, 2, 3];

const append = (arr, el) => {
	return [...arr, el];
};

const newArrTest = append(arrTest, 4);
console.log(arrTest);
console.log(newArrTest);
console.log('---------------------------------');

const users = [
	{ id: 1, name: 'John', isActive: true },
	{ id: 2, name: 'Aki', isActive: true },
	{ id: 3, name: 'Boy', isActive: true },
];

const userExists = (users, user) => {
	// return users.some((item) => {
	// 	return item.name === user;
	// });

	// return Boolean(users.find((item) => item.name === user));

	return users.findIndex((item) => item.name === user) >= 0;
};

console.log(userExists(users, 'John'));

console.log('-----------------------------------------------');

const arrDuplicates = [1, 2, 2, 2, 3, 4, 4];
const unique = (arr) =>
	arr.reduce((acc, curr) => {
		return !acc.includes(curr) ? [...acc, curr] : acc;
	}, []);

console.log(unique(arrDuplicates));
console.log('-------------------------------------');

const numbers = [2, 4, 5, 7, 4, 5, 9, 1];
const sortedNums = [...numbers].sort((a, b) => a - b);
console.log(numbers);
console.log(sortedNums);

const books = [
	{ name: 'John' },
	{ name: 'Aki' },
	{ name: 'Cuni' },
	{ name: 'Bob' },
	{ name: 'Dean' },
];

const sortedBooks = [...books].sort((a, b) => (a.name < b.name ? -1 : 1));

console.log(books);
console.log(sortedBooks);

console.log('-----------------------------------------');
const arrArr = [1, 2, [3, 4, [5, 6, 7, [8, 9]]], [11, 12, [10]]];

const newArr = arrArr.reduce((acc, curr) => {
	return Array.isArray(curr) ? [...acc, curr.flat()] : [...acc, curr];
}, []);
console.log(newArr);
console.log('ooooooooooooooooooooooooooooooooooooooooooo');

const flattenedArr = [];
const recursion = (arr) => {
	arr.forEach((element) => {
		if (Array.isArray(element)) {
			recursion(element);
		} else {
			flattenedArr.push(element);
		}
	});
};
recursion(arrArr);
console.log(flattenedArr);

console.log('---------------------------------------------');

const orders = [44, 66, 77, 11, 4, 66, 99, 66, 10];

const total = orders.reduce((acc, curr) => (acc += curr), 0);
const withTax = orders.map((item) => (item * 1.1).toFixed(2));
const highValue = orders.filter((item) => item > 50);

console.log(total);
console.log(withTax);
console.log(highValue);
console.log('---------------------------------------');

const exp = '{[({})]}';

const openPer = {
	'{': '}',
	'[': ']',
	'(': ')',
};

const closedPer = {
	'}': '{',
	']': '[',
	')': '(',
};

const isBalancedParentheses = (parString) => {
	const arrPer = [];
	for (let i = 0; i < exp.length; i++) {
		if (!!openPer[exp[i]]) {
			arrPer.push(exp[i]);
		} else {
			if (arrPer.includes(closedPer[exp[i]])) {
				const index = arrPer.findIndex((item) => item === closedPer[exp[i]]);
				arrPer.splice(index, 1);
			} else {
				return false;
			}
		}
	}
	return arrPer.length < 1 ? true : false;
};

console.log(isBalancedParentheses(exp));

console.log('___________________________________________');

const getPhoto = (url, callback) => {
	console.log('Downloading...');
	setTimeout(() => {
		callback(url);
	}, 2000);
};

const googleUrl = 'google.com';

const displayPhoto = (url) => {
	console.log(`Got photo from ${url}`);
};

getPhoto(googleUrl, displayPhoto);

console.log('===========================================================');

const addingNumbers = (num) => {
	const cache = {};
	return (value) => {
		if (value in cache) {
			console.log('From cache');
			return cache[value];
		} else {
			console.log('Creating value');
			cache[value] = num + 10;
			return cache[value];
		}
	};
};

const add = addingNumbers(3);
console.log(add());
console.log(add());
console.log(add());
console.log(add());

console.log(
	'`````````````````````````````````````````````````````````````````````````'
);
const numsObj = {
	a: 3,
	b: 4,
	c: 'Hello',
};

for (const key in numsObj) {
	if (typeof numsObj[key] === 'number') {
		numsObj[key] *= 10;
	}
}

console.log(numsObj);

console.log('===========================================');

const aki = {
	name: 'jasmin',
	age: 44,
};

const akiString = JSON.stringify(aki);
console.log(akiString);
const akiObject = JSON.parse(akiString);
console.log(akiObject);

console.log(
	'ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt'
);

console.log([...'testing and now']);

const settings = {
	name: {
		first: 'jasmin',
		last: 'adilovic',
	},
	health: 3,
	strength: 10,
};

const {
	name: { first, last },
	health,
	strength,
} = settings;
console.log(first, last, health, strength);

const newString = JSON.stringify(settings, ['name']);
console.log(newString);
const newObj = JSON.parse(newString);
console.log(newObj);

console.log('----------------------------------------------------');
const getList = (arr, item, ...args) => {
	return [...arr, item, ...args];
};

console.log(getList(['ab', 'cd', 'ef'], 'aki', 'boby', 'mark'));
