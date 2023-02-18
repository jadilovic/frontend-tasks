const { promisify } = require('util');

const useSetTimeout = promisify(setTimeout);

useSetTimeout(1000).then(() => console.log('done in 1 sec'));

const getTime = (delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('done here');
		}, delay);
	});
};

getTime(1000).then((data) => console.log(data));

foo();

function foo() {
	console.log('helo here');
}

var foo = () => {
	console.log('hello world');
};

foo();

const functionOne = (x) => {
	const functionTwo = (y) => {
		console.log(x + y);
	};
	return functionTwo;
};

console.log(functionOne(5)(4));

const two = functionOne(7);
two(8);

const getBurger = (callBack) => {
	setTimeout(() => {
		callBack();
	}, 2000);
};

const callBack = () => {
	console.log('callBack called');
};

const promise = () => {
	console.log('promise called');
};

const getBurgerPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
	}, 3000);
});

getBurger(callBack);

getBurgerPromise.then(() => promise());
