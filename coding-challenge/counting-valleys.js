function countingValleys(steps, path) {
	// Write your code here
	// const pathArr = path.split('');
	// let altitude = 0;
	// let valleyArr = [];
	// let final = 0;

	// const sum = (arr) => {
	// 	const total = arr.reduce((acc, curr) => {
	// 		acc += curr;
	// 		return acc;
	// 	}, 0);
	// 	return total;
	// };
	// console.log(pathArr);
	// for (let i = 0; i < pathArr.length; i++) {
	// 	pathArr[i] === 'U' ? altitude++ : altitude--;
	// 	if (altitude <= 0 && pathArr[i] === 'U') {
	// 		valleyArr.push(1);
	// 	}
	// 	if (altitude < 0 && pathArr[i] === 'D') {
	// 		valleyArr.push(-1);
	// 	}
	// 	console.log(valleyArr);
	// 	if (valleyArr.length > 1 && sum(valleyArr) === 0) {
	// 		console.log('test');
	// 		final++;
	// 		valleyArr = [];
	// 	}
	// }

	// let count = 0;
	// const finalReduce = pathArr.reduce((acc, curr) => {
	// 	if (curr === 'U') {
	// 		acc += 1;
	// 	} else {
	// 		acc -= 1;
	// 	}
	// 	if (acc === 0) {
	// 		count++;
	// 	}
	// 	return acc;
	// }, 0);
	// console.log(count);
	// return Math.ceil(count / 2);
	let current = 0;
	let vCount = 0;
	for (let i = 0; i < path.length; i++) {
		if (path[i] == 'U') {
			current++;
			if (current == 0) vCount++;
		} else {
			current--;
		}
	}
	return vCount;
}

console.log(countingValleys(8, 'DDUDDUUDUU'));
