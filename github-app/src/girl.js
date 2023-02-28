import { Person } from './person';

export class Girl extends Person {
	constructor(name, toys, callBack, arr) {
		super(name, callBack, arr);
		this.toys = toys;
	}

	play() {
		console.log(this.name + ' playing with ' + this.toys);
	}
}
