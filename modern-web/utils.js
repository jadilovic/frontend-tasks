class Track {
	constructor(params) {
		this.name = params.name;
		this.age = params.age;
	}

	display() {
		console.log(`You are ${this.name} and your age is ${this.age}`);
	}
	// constructor(name) {
	// 	this.name = name;
	// }
	// eat() {
	// 	console.log('hello');
	// }
}

const track1 = new Track({
	name: 'Cuni',
	age: 6,
});
console.log(track1.name);
// track1.eat();

const track2 = new Track({
	name: 'Aki',
	age: 9,
});

console.log(track2.name);
track1.display();
track2.display();

class Sky extends Track {
	constructor(params) {
		super(params);
		this.image = params.image;
	}
}

const sky = new Sky({
	name: 'Adian',
	age: 13,
	image: 'google',
});

sky.display();
console.log(sky.image);
function getFruits(fruitsList, fruitsL, fruits, ...spreading) {
	return [...fruitsList, ...fruitsL, ...spreading, fruits];
}

console.log(getFruits(['apple', 'peach'], ['test', 'mark'], 'orange', 'lemon'));

const value = { age: 10, balance: 100 };

function multiply(x = { ...value }) {
	console.log((x.age *= 2), (x.balance *= 3));
}

multiply();
multiply();
multiply(value);
multiply(value);

// const objValueDeep = Object.assign({}, value);
const objValueDeep = JSON.parse(JSON.stringify(value));
console.log((objValueDeep.age = 43));
console.log(value);

const calc = {
	total: 0,
	add(value) {
		this.total += value;
		return this.total;
	},
	subtract(value) {
		this.total -= value;
		return this.total;
	},
};

console.log(calc.add(4));

const user = {
	name: 'Boby',
	print() {
		console.log(this);
		const display = () => {
			console.log(this);
		};
		display();
	},
	// display: () => {
	// 	console.log(this);
	// },
};

console.log((this.name = 'Aki'));
console.log(this);
user.print();
// user.display();

class Person {
	firstName = 'Jasmin';
	constructor(test) {
		this.test = test;
	}
	print() {
		const test = 'Linda';
		console.log(this.firstName);
	}
}

const indi = new Person('Mark');
indi.print();

function makeUser() {
	return {
		name: 'Sunny',
		ref() {
			return this;
		},
	};
}

const buddy = makeUser();
console.log(buddy.ref().name);

const guy = {
	last: 'Check',
	makeIt() {
		console.log(this.last);
	},
};

setTimeout(() => {
	guy.makeIt();
}, 1000);

const girl = {
	name: 'Alina',
	display() {
		console.log(`Hello ${this.name}`);
		const print = () => {
			console.log(`Byby ${this.name}`);
		};
		print();
	},
	// print: () => {
	// 	console.log(`Byby ${this.name}`);
	// },
};

girl.display();
girl.display();

const calculator = {
	// a: 0,
	// b: 0,
	// sum: 0,
	read() {
		// this.a = 4;
		// this.b = 5;
		this.a = +prompt('a = ', 0);
		this.b = +prompt('b = ', 0);
	},
	sum() {
		return Number(this.a) + Number(this.b);
	},
	multi() {
		return this.a * this.b;
	},
};

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.multi());

function callBack() {
	console.log(this.city);
}

const globe = {
	city: 'Detroit',
	show(fn) {
		console.log(this.city);
		fn();
	},
	display() {
		console.log(arguments);
		console.log(arguments.length);
		arguments[0]();
	},
};

globe.show(callBack);
globe.display(callBack, 1, 2, 3);

const calc2 = {
	total: 0,
	add(value) {
		this.total += value;
		return this;
	},
	subtract(value) {
		this.total -= value;
		return this;
	},
	multi(value) {
		this.total *= value;
		return this;
	},
	divide(value) {
		this.total /= value;
		return this;
	},
};

calc2.add(9);
console.log(calc2.divide(3));
console.log(calc2.subtract(1).add(5).total);

const culmsySquare = () => {
	const res = {};
	return function test(num1, num2) {
		console.log(res);
		const attribute = num1 + ' - ' + num2;
		if (res[attribute]) {
			return res[attribute];
		}
		for (let i = 0; i < 111111111; i++) {}
		res[attribute] = num1 * num2;
		return res[attribute];
	};
};

let startTime = new Date().getTime();
const getTest = culmsySquare();
console.log(getTest(4567, 9876));
console.log(new Date().getTime() - startTime);

startTime = new Date().getTime();
console.log(getTest(4567, 9876));
console.log(new Date().getTime() - startTime);

startTime = new Date().getTime();
console.log(getTest(4561, 9876));
console.log(new Date().getTime() - startTime);

startTime = new Date().getTime();
console.log(getTest(4567, 9876));
console.log(new Date().getTime() - startTime);
