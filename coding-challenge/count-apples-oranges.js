function countApplesAndOranges(s, t, a, b, apples, oranges) {
	// Write your code here
	const getFruit = (fruit, tree) => {
		const fruitCount = fruit
			.map((item) => item + tree)
			.reduce((acc, curr) => {
				if (curr >= s && curr <= t) {
					acc++;
				}
				return acc;
			}, 0);
		return fruitCount;
	};
	console.log(getFruit(apples, a));
	console.log(getFruit(oranges, b));
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
