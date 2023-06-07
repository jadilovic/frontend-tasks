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
