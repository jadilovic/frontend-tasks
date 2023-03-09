function truckTour(petrolpumps) {
	const fuelValuesIndex = [];

	let fuel = 0;
	let distanceToNextPump = 0;

	const driving = (arrIndex) => {
		fuel = petrolpumps[arrIndex][0];
		distanceToNextPump = petrolpumps[arrIndex][1];
		const fuelInTank = fuel - distanceToNextPump;
		fuelValuesIndex.push(fuelInTank);
	};

	for (let i = 0; i < petrolpumps.length; i++) {
		driving(i);
	}

	console.log(fuelValuesIndex);
	let fuelLeft = 0;
	let newIndex = 0;
	let currentIndex = 0;
	const usingFuel = (curr) => {
		fuelLeft += curr;
		console.log(fuelLeft);
		if (fuelLeft < 0 && newIndex < fuelValuesIndex.length) {
			const moved = fuelValuesIndex.shift();
			fuelValuesIndex.push(moved);
			fuelLeft = 0;
			currentIndex++;
			usingFuel(fuelValuesIndex[0]);
		} else {
			newIndex++;
			if (newIndex < fuelValuesIndex.length) {
				usingFuel(fuelValuesIndex[newIndex]);
			}
		}
	};

	usingFuel(fuelValuesIndex[newIndex]);

	return currentIndex;
}
console.log('=====================================');
console.log(
	truckTour([
		[1, 5],
		[10, 3],
		[1, 4],
		[3, 4],
		[8, 4],
	])
);
