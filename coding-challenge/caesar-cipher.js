function caesarCipher(s, k) {
	// Write your code here
	const decimalArr = s
		// .replace(/[^a-z]/gi, '')
		.split('')
		.map((ch) => ch.charCodeAt(0));

	const maxLowercase = 122;
	const maxUppercase = 90;
	const newDecimalArr = [];

	const moveLetter = (dec, places, max) => {
		const moving = places > 26 ? places % 26 : places;
		let newDec = dec + moving;
		if (newDec > max) {
			newDec = newDec - 26;
		}
		return newDec;
	};

	for (let i = 0; i < decimalArr.length; i++) {
		const asciDec = decimalArr[i];
		if (asciDec >= 65 && asciDec <= 90) {
			newDecimalArr.push(moveLetter(asciDec, k, maxUppercase));
		} else if (asciDec >= 97 && asciDec <= 122) {
			newDecimalArr.push(moveLetter(asciDec, k, maxLowercase));
		} else {
			newDecimalArr.push(asciDec);
		}
	}
	const string = newDecimalArr
		.map((decimal) => String.fromCharCode(decimal))
		.join('');
	return string;
}

console.log(caesarCipher('xy-z', 2));
