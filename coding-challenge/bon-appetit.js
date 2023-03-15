function bonAppetit(bill, k, b) {
	// Write your code here
	const totalBill = bill.reduce((acc, curr, index) => {
		if (index !== k) {
			acc += curr;
		}
		return acc;
	}, 0);
	const annasBill = totalBill / 2;
	if (annasBill === b) {
		console.log('Bon Appetit');
	} else {
		console.log(b - annasBill);
	}
}

bonAppetit([3, 10, 2, 9], 1, 12);
