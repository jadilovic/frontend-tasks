class Player {
	score = 0;

	jump() {
		console.log('player is jumping');
	}

	walking() {
		console.log('player is walking');
	}
}

const player1 = new Player();
console.log(player1.score);
player1.score;
player1.jump();

class Student {
	constructor(name, age, gpa) {
		this.name = name;
		this.age = age;
		this.gpa = gpa;
	}

	studying() {
		console.log('Is studying ' + `${this.name}`);
	}
}

const std = new Student('aki', 3, 2);
console.log(std.age);
console.log(std.studying());

console.log(std);

class Car {
	static numberOfCars = 0;

	constructor(model) {
		this.model = model;
		Car.numberOfCars += 1;
	}

	static startRace() {
		console.log(`Start the race ${this.numberOfCars}`);
	}
}

const car1 = new Car('VW');

// console.log(car1.model);
// console.log(Car.numberOfCars);
// console.log(car1.model);

// const car2 = new Car('Ford');

// console.log(car2.model);
// console.log(Car.numberOfCars);
// console.log(car2.model);

// const car3 = new Car('BMW');

// console.log(car3.model);
// console.log(Car.numberOfCars);
// console.log(car3.startRace);

// Car.startRace();

class Animal {
	alive = true;

	constructor(color) {
		this.color = color;
	}

	eating() {
		console.log(`${this.name} is eating`);
	}

	sleeping() {
		console.log(`${this.name} is sleeping`);
	}
}

class Rabbit extends Animal {
	name = 'Bob';

	constructor(color, name) {
		super(color);
		this.name = name;
	}

	running() {
		console.log(`${this.name} is running`);
	}
}

class Fish extends Animal {
	name = 'Fishy';

	constructor(color, river) {
		super(color);
		this.river = river;
	}

	swimming() {
		console.log(`${this.name} is swimming`);
	}
}

class Hawk extends Animal {
	name = 'Hawky';

	flying() {
		console.log(`${this.name} is flying`);
	}
}

const rb = new Rabbit('Blue', 'Aki');
const hw = new Hawk();
const fi = new Fish('Green', 'Una');

// console.log(fi);
// console.log(hw);

// console.log(rb.sleeping(), rb.alive, rb.eating(), rb.name, rb.running());

// rb.alive = false;
// console.log(rb);

class MuscleCar {
	constructor(power) {
		this._gas = 25;
		this._power = power;
	}

	get power() {
		return `${this._power}hp`;
	}

	get gas() {
		return `${this._gas} is at ${(this._gas / 50) * 100}%`;
	}

	set gas(value) {
		if (value > 50) {
			this._gas = 50;
		} else if (value < 0) {
			this._gas = 0;
		} else {
			this._gas = value;
		}
	}
}

const car = new MuscleCar(200);
const car4 = new MuscleCar(100);
const car2 = new MuscleCar(50);
const car3 = new MuscleCar(700);

car._power = 500;
car.gas = 33;
console.log(car.power, car.gas);

const displayCar = (car) => {
	console.log(car.power, car.gas);
};

[car, car4, car2, car3].map((item) => displayCar(item));
