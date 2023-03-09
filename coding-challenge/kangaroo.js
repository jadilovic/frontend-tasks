function kangaroo(x1, v1, x2, v2) {
	// function kangaroo(startX, speedX, startY, speedY) {
	// Write your code here

	if (
		v2 >= x1 + v1 ||
		v1 >= x2 + v2 ||
		(x1 < x2 && v1 < v2) ||
		(x2 < x1 && v2 < v1) ||
		v1 === v2
	) {
		return 'NO';
	}

	let itemX = x1 + v1;
	let itemY = x2 + v2;
	if (itemX > itemY) {
		const temp = itemX;
		itemX = itemY;
		itemY = temp;
	}
	console.log(itemX, itemY);
	while (itemX < itemY) {
		itemX += v1;
		itemY += v2;
	}
	if (itemX === itemY) {
		return 'YES';
	}
	return 'NO';
}

console.log(kangaroo(43, 2, 70, 2));
