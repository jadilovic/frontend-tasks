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
