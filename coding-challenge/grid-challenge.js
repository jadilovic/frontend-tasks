function gridChallenge(grid) {
	// Write your code here
	if (Array.isArray(grid)) {
		const sortedGrid = [];
		for (let i = 0; i < grid.length; i++) {
			sortedGrid.push(grid[i].split('').sort());
		}

		console.log(sortedGrid);

		const columnGrid = [];
		for (let i = 0; i < sortedGrid.length; i++) {
			const rowArr = [];
			for (let j = 0; j < sortedGrid.length; j++) {
				rowArr.push(sortedGrid[j][i]);
			}
			columnGrid.push(rowArr);
		}

		for (let i = 0; i < columnGrid.length; i++) {
			if (columnGrid[i].join('') !== columnGrid[i].sort().join('')) {
				return 'NO';
			}
		}

		console.log(columnGrid);

		return 'YES';
	}
}

// console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']));
console.log(gridChallenge(['mpxz', 'abcd', 'wlmf']));
