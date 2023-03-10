function getTotalX(a, b) {
	// Write your code here
	const max = Math.max(...a, ...b);
	const min = Math.min(...a, ...b);
	const newArr = [...a, ...b];
	const arr = [];
	for (let i = min; i <= max; i++) {
		for (let j = 0; j < newArr.length; j++) {
			if (newArr[j] % i === 0) {
				arr.push(i);
			}
		}
	}
	const uniqueArr = [...new Set(arr)];
	// const arrFactor = [];
	// for (let i = 0; i < uniqueArr.length; i++) {
	// 	for (let j = 0; j < b.length; j++) {
	// 		if (b[j] % uniqueArr[i] === 0) {
	// 			arrFactor.push(uniqueArr[i]);
	// 		}
	// 	}
	// }
	let validCount = 0;

	for (let x = 1; x <= 100; x++) {
		if (a.every((int) => x % int == 0)) {
			if (b.every((int) => int % x == 0)) {
				validCount++;
			}
		}
	}

	return validCount;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
