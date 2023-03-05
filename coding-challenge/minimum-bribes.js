function minimumBribes(q) {
	// Write your code here
	//	console.log(q);
	let total = 0;
	for (let i = 0; i < q.length; i++) {
		const diff = q[i] - (i + 1);
		if (diff > 0) {
			total += diff;
		}
		if (diff > 2) {
			console.log('Too chaotic');
			return;
		}
	}
	console.log(total);
}

//console.log(
minimumBribes([2, 5, 1, 3, 4]);
// console.log(
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
