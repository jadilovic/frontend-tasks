const countArr = [0, 1];

const fibonacci = (n) => {
	console.log('length : ', countArr.length);
	if (countArr.length > n) {
		console.log('done');
		return 'test';
	}

	countArr.push(countArr[countArr.length - 2] + countArr[countArr.length - 1]);
	// countArr.push(fibonacci(n - 1) + fibonacci(n - 2));
	// console.log(countArr);
	// console.log(n);
	// return fibonacci(n - 1) + fibonacci(n - 2);
	console.log(n);
	fibonacci(n);
	console.log(countArr);
	return countArr[countArr.length - 1];
};

console.log(fibonacci(6));
