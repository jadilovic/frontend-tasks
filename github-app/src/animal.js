export default class Animal {
	constructor(name, food, noise, eat) {
		this.name = name;
		this.food = food;
		this.callBackNoise = noise;
	}

	makingNoise() {
		this.callBackNoise();
	}

	showEating() {
		console.log(this.name + ' is eating this food ' + this.food);
	}
}

export function promotion() {
	console.log('promotion on tv');
}
