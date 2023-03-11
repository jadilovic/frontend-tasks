function migratoryBirds(arr) {
	// Write your code here
	const list = {};
	arr.forEach((element) => {
		if (list[element]) {
			list[element] = list[element] + 1;
		} else {
			list[element] = 1;
		}
	});
	let max = Math.max(...Object.values(list));
	let first = Object.keys(list).find((item) => list[item] === max);
	return parseInt(first);
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
