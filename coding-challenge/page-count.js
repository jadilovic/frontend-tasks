function pageCount(n, p) {
	// Write your code here
	const pagesArr = [];
	for (let i = 0; i < n + 1; i++) {
		pagesArr.push([i, ++i]);
	}

	let turn = 0;

	for (let i = 0, j = pagesArr.length - 1; i < pagesArr.length; i++, j--) {
		if (
			pagesArr[i][0] === p ||
			pagesArr[i][1] === p ||
			pagesArr[j][0] === p ||
			pagesArr[j][1] === p
		) {
			turn = i;
			break;
		}
	}
	return turn;
}

console.log(pageCount(12, 8));
