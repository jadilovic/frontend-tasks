const circle = {
	radius: 20,
	location: {
		x: 1,
		y: 2,
	},
	draw: function () {
		console.log('draw circle');
	},
};

circle.draw();

// Factory function

const createCircle = (radius) => {
	return {
		radius,
		location: {
			x: 3,
			y: 7,
		},
		draw: () => {
			console.log('draw ' + radius);
		},
	};
};

const newCircle = createCircle(3);
newCircle.draw();
newCircle.radius = 5;
newCircle.location.x = 10;
console.log(newCircle);

// Constructor function

function Circle(radius) {
	this.radius = radius;
	let factor = 7;
	let computation = () => {
		console.log('computation');
	};
	// this.getFactor = () => {
	// 	return factor;
	// };
	(this.location = {
		x: 3,
		y: 7,
	}),
		(this.draw = function () {
			computation();
			console.log('draw ' + this.radius + ' and by factor: ' + factor);
		});

	Object.defineProperty(this, 'factor', {
		get: function () {
			return factor;
		},
		set: function (value) {
			// if (!value.x || value.y) {
			// 	throw Error('Invalid values');
			// }
			factor = value;
		},
	});
}

const constructorCircle = new Circle(6);
constructorCircle.draw();
console.log(constructorCircle.location.y);

const x = {};

console.log(Circle.length);
console.log(Circle.call({}, 1));
console.log(Circle.apply({}, [1, 2, 3]));

const xy = { value: 3 };
const zd = xy;

xy.value = 99;

constructorCircle.height = 77;
constructorCircle['width'] = 55;
delete constructorCircle.radius;
console.log(constructorCircle);

for (const key in constructorCircle) {
	if (typeof constructorCircle[key] !== 'object') {
		console.log(key + ' : ' + constructorCircle[key]);
	}
}

const keys = Object.keys(constructorCircle);
console.log(keys);

if ('draw' in constructorCircle) {
	console.log('Draw is is Circle');
}

constructorCircle.draw();
// console.log(constructorCircle.getFactor());
console.log(constructorCircle.factor);
constructorCircle.factor = 1;
console.log(constructorCircle.factor);

console.log(Date.now());

function StopWatch() {
	let start = 0;
	let end = 0;
	let duration = 0;
	function reset() {
		duration = 0;
	}
	this.start = function () {
		if (start > 0) {
			throw Error('Stopwatch is already running');
		}
		start = Date.now();
	};
	this.end = function () {
		if (start === 0) {
			throw Error('You have not started the stopwatch');
		}
		end = Date.now();
		duration = duration + (end - start) / 1000;
		start = 0;
		end = 0;
	};
	this.reset = function () {
		duration = 0;
	};
	Object.defineProperty(this, 'duration', {
		get: function () {
			return duration;
		},
	});
}
