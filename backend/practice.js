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
