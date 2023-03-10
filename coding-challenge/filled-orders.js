function filledOrders(order, k) {
	// Write your code here

	// let fulfill = 0;
	// const sortedOrders = order.sort((a, b) => a - b);
	// sortedOrders.forEach((element) => {
	// 	if (k > 0) {
	// 		k -= element;
	// 		if (k >= 0) {
	// 			fulfill++;
	// 		}
	// 	}
	// });
	// return fulfill;
	let count = 0;
	let arr = [];
	arr = order.sort().filter((item, index) => {
		if (item <= k) {
			k = k - item;
			return item;
		}
	});
	return arr.length;
}

console.log(filledOrders([3, 6, 2, 9], 3));
