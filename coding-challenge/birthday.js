function birthday(s, d, m) {
	// Write your code here
	const values = [];
	for (let i = 0; i < s.length; i++) {
		if (i + m <= s.length) {
			const arr = [...s];
			const sum = arr.splice(i, m).reduce((acc, curr) => (acc += curr));
			values.push(sum);
		}
	}
	const numberOfWays = values.reduce((acc, value) => {
		if (value === d) {
			acc++;
		}
		return acc;
	}, 0);
	return numberOfWays;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
