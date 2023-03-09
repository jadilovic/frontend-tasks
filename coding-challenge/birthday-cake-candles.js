function birthdayCakeCandles(candles) {
	// Write your code here
	const maxCandle = Math.max(...candles);
	const totalMaxCandles = candles.reduce((acc, curr) => {
		if (curr === maxCandle) {
			acc++;
		}
		return acc;
	}, 0);
	return totalMaxCandles;
}

console.log(birthdayCakeCandles([3, 1, 2, 1, 3]));
