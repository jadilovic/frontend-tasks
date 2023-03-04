function lonelyinteger(a) {
	// Write your code here
	const integersObject = {};
	a.forEach((element) => {
		if (integersObject[element]) {
			integersObject[element] = ++integersObject[element];
		} else {
			integersObject[element] = 1;
		}
	});
	return parseInt(
		Object.keys(integersObject).find((key) => integersObject[key] === 1)
	);
}

console.log(
	lonelyinteger([1, 2, 3, 4, 3, 2, 1, 5, 3, 8, 9, 4, 3, 8, 9, 7, 9, 4, 3])
);
