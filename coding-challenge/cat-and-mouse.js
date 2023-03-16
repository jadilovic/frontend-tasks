function catAndMouse(x, y, z) {
	const catA = Math.abs(x - z);
	const catB = Math.abs(y - z);
	if (catA === catB) {
		console.log('Mouse C');
		return 'Mouse C';
	}
	if (catA < catB) {
		console.log('Cat A');
		return 'Cat A';
	}
	if (catA > catB) {
		console.log('Cat B');
		return 'Cat B';
	}
}

catAndMouse(1, 3, 2);
