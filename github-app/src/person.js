export class Person {
	constructor(name, callBack, arr) {
		this.name = name;
		this.callBack = callBack;
		this.arr = arr;
	}

	showAll() {
		console.log(this.name);
		this.callBack();
		console.log(this.arr);
	}

	play() {
		console.log(this.name + ' is working');
	}
}
