function palindromeIndex(s) {
	// Write your code here
	if (s.split('').reverse().join('') === s) {
		return -1;
	}

	for (let i = 0; i < s.length; i++) {
		const strArr = s.split('');
		strArr.splice(i, 1);
		if (strArr.join('') === strArr.reverse().join('')) {
			return i;
		}
	}
	return -1;
}

console.log(palindromeIndex('abca'));
