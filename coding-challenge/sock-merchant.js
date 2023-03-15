function sockMerchant(n, ar) {
	// Write your code here
	const sockPairs = {};
	for (let i = 0; i < ar.length; i++) {
		if (sockPairs[ar[i]]) {
			sockPairs[ar[i]] += 1;
		} else {
			sockPairs[ar[i]] = 1;
		}
	}
	const totalPairs = Object.values(sockPairs).reduce((acc, curr) => {
		acc += Math.floor(curr / 2);
		return acc;
	}, 0);
	return totalPairs;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
