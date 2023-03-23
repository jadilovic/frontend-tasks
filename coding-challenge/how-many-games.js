/*
 * Complete the 'howManyGames' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER d
 *  3. INTEGER m
 *  4. INTEGER s
 */

function howManyGames(p, d, m, s) {
	// Return the number of games you can buy
	if (p > s) {
		return 0;
	}
	let itemsCount = [];
	let total = 0;
	const recursion = (amount) => {
		itemsCount.push(amount);
		if (amount > m) {
			amount -= d;
			if (amount < m) {
				amount = m;
			}
		}
		total = itemsCount.reduce((acc, curr) => {
			acc += curr;
			return acc;
		}, 0);
		console.log(total, amount, itemsCount.length);
		if (total + m < s && amount !== m) {
			recursion(amount);
		}
	};
	recursion(p);

	if (total + m < s) {
		return Math.floor(itemsCount.length + (s - total) / m);
	}

	if (total > s) {
		return itemsCount.length - 1;
	}

	return itemsCount.length;
}

console.log(howManyGames(100, 19, 1, 180));
