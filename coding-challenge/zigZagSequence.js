function processData(input) {
	//Enter your code here
	const inputArr = input.split(' ').map((item) => parseInt(item));
	if (inputArr.length > 1) {
		const maxNumber = Math.max(...inputArr);
		inputArr.splice(inputArr.indexOf(maxNumber), 1);
		inputArr.sort((a, b) => a - b);
		const firstHalfArr = inputArr.slice(0, -inputArr.length / 2);
		const secondHalfArr = inputArr
			.slice(-inputArr.length / 2)
			.reverse((a, b) => b - a);

		console.log([...firstHalfArr, maxNumber, ...secondHalfArr].join(' '));
	}
}

processData('7 2 6 4 5 3 1');
