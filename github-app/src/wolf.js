import Animal, { promotion } from './animal';

export class Wolf extends Animal {
	constructor(name, location, food, noise) {
		super(name, food, noise);
		this.location = location;
	}

	showLocation() {
		console.log(this.name + ' has location ' + this.location);
	}

	promotionOnTV() {
		promotion();
	}
}
