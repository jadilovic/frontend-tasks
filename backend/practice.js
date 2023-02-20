const renderMethod = require('./3-reveal-module');

const vehicle = {
	drive: function () {
		console.log('I am driving');
	},
};

const car = {
	make: 'Chevy',
};

//Object.setPrototypeOf(car, vehicle);
Object.setPrototypeOf(vehicle, car);

//car.drive();
console.log(vehicle.make);

renderMethod();

const f = function (a, b) {
	if (arguments.length === f.length) {
		console.log('got the right');
	} else {
		console.log('did not get right');
	}
};

f(1);
f(1, 2);
f(1, 2, 3);

let a = {
	a: 123,
	b: 456,
};

[a].forEach(function (x, index) {
	console.log(x, index);
});

[a.a, a.b].forEach((x, index) => {
	console.log(x, index);
});

/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional
 * references to itself
 */

let obj = (function () {
	let objInstance; //private variable
	function create() {
		//private function to create methods and properties
		let _isRunning = false;
		const start = () => {
			_isRunning = true;
		};
		const stop = () => {
			_isRunning = false;
		};
		const runningStatus = () => {
			return _isRunning;
		};
		return {
			start,
			stop,
			runningStatus,
		};
	}
	return {
		getInstance: function () {
			if (!objInstance) {
				return (objInstance = create());
			} else {
				return objInstance;
			}
		},
	};
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();
console.log(obj1.runningStatus());
console.log(obj1.runningStatus());

obj1.start();
console.log(obj1.runningStatus());
console.log(obj1.runningStatus());

console.log(obj1 == obj2);

function f1(a) {
	let b = 2;
	setTimeout(function () {
		console.log(a, b);
	}, 1000);
}

function f2() {
	for (let i = 0; i < 3; i++) {
		setTimeout(function () {
			console.log(i);
		}, 1000 * i);
	}
}

f1();
f2();

//version 1
const a1 = Array.from(
	{
		length: 5,
	},
	(n) => Math.random()
);
console.log(a1);

const a2 = new Array(5).fill(1).map((n) => Math.random());
console.log(a2);

// Generate Random Hex Colour Values

function colour() {
	return `#${Array(6)
		.fill(1)
		.map((n) => Math.floor(Math.random() * 10))
		.join('')}`;
}

const color = () => {
	return `#${Math.random().toString(16).substring(2, 8)}`;
};

for (let index = 0; index < 10; index++) {
	console.log(color());
}

//Why do we get this weird result from the map method?
// myarray.map(func);
//We want to convert 3 strings into numbers

let result = ['1', '7', '11'].map((n) => parseInt(n)); //returns [1, NaN, 3]

console.log(result);

// Differences between dot notation and square bracket syntax

let sam = {
	castiel: 'mary',
};
let dean = {
	john: 'crowley',
	mary: 'chuck',
};

//which, if any, of these three log statements will work?
console.log(dean[sam.castiel]);
// console.log(dean.sam.castiel);
console.log(dean[sam['castiel']]);
// console.log(dean[sam[castiel]]);

// Using `this` inside an object
// The object has functions created three different ways
// What will be the result of the three log statements?

const circle = {
	radius: 10,
	circumference: function () {
		return 2 * Math.PI * this.radius;
	},
	diameter() {
		return this.radius * 2;
	},
	area: () => {
		return Math.PI * Math.PI * this.radius;
	},
};
console.log('Using `this` inside an object');
console.log(circle.area()); //
console.log(circle.diameter()); //
console.log(circle.circumference()); //

/**
 * Write a function to determine if a number is an integer
 */

let isInt = function (num) {
	return !isNaN(num) && parseInt(num) === num;
};
console.log(3, isInt(3));
console.log(3.5, isInt(3.5));
console.log(1.0, isInt(1.0));
