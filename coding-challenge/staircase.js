function staircase(n) {
	// Write your code here
	for (let i = n; i > 0; i--) {
		let line = '';
		for (let j = 1; j < n + 1; j++) {
			if (j < i) {
				line += ' ';
			} else {
				line += '#';
			}
		}
		console.log(line);
	}
}

staircase(6);
