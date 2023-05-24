// Keyword new
// const Book = new Object();
// Book.name = 'Bob';
// Book.price = 44;

// Book.getInfo = function () {
// 	return `${this.name} ${this.price}`;
// };

// Object literal
// const Book = {
// 	name: 'Bob',
// 	price: 33,
// 	'publication date': 'June 1st 2021',
// 	getInfo: function () {
// 		return `${this.name} ${this.price}`;
// 	},
// };

// Using function
// function Book(name, price) {
// 	this.name = name;
// 	this.price = price;

// 	this.getPrice = function () {
// 		return this.price;
// 	};
// 	this.getBook = getBookInfo;
// }

// function getBookInfo() {
// 	return `${this.name} ${this.price}`;
// }

// const Book1 = new Book('Aki', 44);
// Book.prototype.getName = function () {
// 	return this.name;
// };

// Singleton
// const Book = new (function () {
// 	this.name = 'aki';
// 	this.price = 3;

// 	this.getInfo = function () {
// 		return `${this.name} ${this.price}`;
// 	};
// })();

// console.log(Book);

// const book2 = new Book();
// console.log(book2);

// Factory Pattern
// function Developer(name) {
// 	this.name = name;
// 	this.type = 'Developer';
// }

// function Tester(name) {
// 	this.name = name;
// 	this.type = 'Tester';
// }

// function FactoryEmployee(name, type) {
// 	switch (type) {
// 		case 1:
// 			return new Developer(name);
// 		case 2:
// 			return new Tester(name);
// 		default:
// 			return;
// 	}
// }

// const arr = [];
// for (let index = 0; index < 10; index++) {
// 	const type = index % 2 === 0 ? 2 : 1;
// 	arr.push(new FactoryEmployee(`emp${index + 1}`, type));
// }

// arr.forEach((element) => {
// 	console.log(element);
// });

// Singleton pattern
const Singleton = (function () {
	function ProcessManager() {
		this.number = 0;
	}

	let pManager;

	function createProcessManager() {
		pManager = new ProcessManager();
		return pManager;
	}

	return {
		getProcessManager: () => {
			if (!pManager) {
				pManager = createProcessManager();
			}
			return pManager;
		},
	};
})();

const process1 = Singleton.getProcessManager();
const process2 = Singleton.getProcessManager();

console.log(process1 === process2);

function User(email, name) {
	this.email = email;
	this.name = name;
	this.logged = false;
}

User.prototype.login = function () {
	this.logged = true;
	return `User ${this.name} is logged in`;
};

User.prototype.logout = function () {
	this.logged = false;
	return `User ${this.name} is logged out`;
};

const user = new User('aki@ba.ba', 'ten');
const user2 = new User('aki@ba.ba', 'ten');
const user3 = new User('aki@ba.ba', 'ten');
console.log(user.login());
console.log(user);
console.log(user.logout());
console.log(user);

function Admin(...args) {
	User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.delete = function (u) {
	return users.filter((user) => user !== u);
};

const admi = new Admin('bob@boby.com', 'text');
const admi1 = new Admin('aki@ba.ba', 'ten');
console.log(admi);

const users = [user, user2, user3, admi, admi1];

admi.login();
console.log(admi);
console.log(users);
console.log(admi.delete(user3));
console.log(users);

function Person(name, age) {
	this.name = name;
	this.age = age;
}

let person1 = new Person('Aki', 55);
let person2 = new Person('Aki', 55);

class Animal {
	name;
	age;
}

const ani = new Animal();
ani.name = 'boby';
ani.age = 9;

console.log(person1, person2);
console.log(ani);

class BankAccount {
	balance;

	constructor(initialBalance) {
		this.balance = initialBalance;
	}

	deposit(amount) {
		this.balance += amount;
	}

	withdraw(amount) {
		if (amount > this.balance) return;
		this.balance -= amount;
	}
}

const acc = new BankAccount(0);
acc.deposit(77);
console.log(acc);
acc.withdraw(87);
console.log(acc);

class AbstractAnimal {
	type;
	constructor() {
		if (this.constructor === AbstractAnimal) {
			throw new Error('Can not instantiate abstract class');
		}
		this.type = 'Parent';
	}
	printType() {
		console.log('This type is : ' + this.type);
	}
}

class Cat extends AbstractAnimal {
	name;
	type = 'Cat';
}

class Dog extends AbstractAnimal {
	name;
	type = 'Dog';
}

const miau = new Cat();
const wou = new Dog();
miau.printType();
wou.printType();

class Rect {
	area;
	constructor(type, sideA) {
		if (this.Object === Rect) {
			throw new Error('This is Abstract Class Rect!');
		}
		this.type = type;
		this.sideA = sideA;
	}
	printArea() {
		console.log('The area of ' + this.type + ' is ' + this.area);
	}
}

class Square extends Rect {
	constructor(type, sideA) {
		super(type, sideA);
		this.area = this.sideA * this.sideA;
	}
}

class Rectangle extends Rect {
	constructor(type, sideA, sideB) {
		super(type, sideA);
		this.sideB = sideB;
		this.area = this.sideA * this.sideB;
	}
}

const sq = new Square('Square', 5);
const rec = new Rectangle('Rectangle', 5, 7);
sq.printArea();
rec.printArea();

class Car {
	name;
	shift;
	printShift() {
		console.log('Sift is : ' + this.shift);
	}
}

class Bmw extends Car {
	constructor(name, shift) {
		super();
		this.name = name;
		this.shift = shift;
	}
}

class Merc extends Car {
	constructor(name, shift) {
		super();
		this.name = name;
		this.shift = shift;
	}
}

const bm = new Bmw('Zoom', 'Automatic');
const merc = new Merc('C class', 'Stick');
bm.printShift();
merc.printShift();

// alert(3);
// console.log(navigator.webdriver());

const book = {
	name: 'text',
	hello: function () {
		console.log('hello');
	},
};

book.hello();

function Bike(type, speed, year) {
	this.type = type;
	this.speed = speed;
	this.year = year;
	// this.getBike = function () {
	// 	return console.log(`You got bike ${this.type} with speeds ${this.speed}`);
	// };
}

Bike.prototype.getBike = function () {
	return console.log(`You got bike ${this.type} with speeds ${this.speed}`);
};

Bike.prototype.getAge = function () {
	const age = new Date().getFullYear() - this.year;
	return console.log(`You got bike ${this.type} which is ${age} old`);
};

Bike.prototype.setYear = function (newYear) {
	this.year = newYear;
	this.revised = true;
	return console.log(
		`You changed year in a bike ${this.type} with new year ${this.year}`
	);
};

const b1 = new Bike('mb', 5, 2005);
const b2 = new Bike('bb', 6, 2015);
b1.getBike();
b2.getBike();
b1.getAge();
b2.getAge();

b1.year = 2001;
console.log(b1);
b1.setYear(1999);

function Paper(name, author, year) {
	this.name = name;
	this.author = author;
	this.year = year;
	// this.getBike = function () {
	// 	return console.log(`You got bike ${this.type} with speeds ${this.speed}`);
	// };
}

Paper.prototype.getPaper = function () {
	console.log('test');
	return console.log(`You paper is ${this.name} and author ${this.author}`);
};

const p1 = new Paper('Azra', 'Sejla', 1998);
p1.getPaper();

function Magazine(name, author, year, month) {
	Paper.call(this, name, author, year);
	this.month = month;
}

Magazine.prototype = Object.create(Paper.prototype);
Magazine.prototype.constructor = Magazine;

const mag = new Magazine('Greg', 'John', 2002, 4);
console.log(mag.getPaper);
console.log(mag);

const bookPrototypes = {
	getName: function () {
		console.log(`The name is: ${this.name}`);
	},
};

const book1 = Object.create(bookPrototypes);
book1.name = 'Hello';
book1.getName();

class Novine {
	constructor(ime, year) {
		this.ime = ime;
		this.year = year;
	}
	getIme() {
		console.log(`This is ime: ${this.ime}`);
	}
	getYear() {
		console.log(`The year is : ${this.year}`);
	}

	static sayHello() {
		console.log('Hello World');
	}
}

const n = new Novine('Dani', 2023);
n.getIme();
n.getYear();
Novine.sayHello();

class Coloring extends Novine {
	constructor(ime, year, color) {
		super(ime, year);
		this.color = color;
	}
}

const col = new Coloring('Vid', 3456, 'Red');
col.getIme();
