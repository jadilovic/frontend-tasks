function divisibleSumPairs(n, k, ar) {
	// Write your code here
	const list = [];
	for (let j = 0; j < ar.length; j++) {
		for (let i = 0; i < n; i++) {
			if ((ar[j] + ar[i]) % k === 0 && i !== j && i < j) {
				list.push(true);
			}
		}
	}
	return list.length;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
