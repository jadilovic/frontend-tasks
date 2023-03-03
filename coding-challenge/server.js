const reverse = (string) => {
	const stringAll = string.split('');
	const reverseLetters = string
		.replace(/[^A-Za-z]/g, '')
		.split('')
		.reverse();
	const newString = [];
	let revIndex = 0;
	for (let index = 0; index < stringAll.length; index++) {
		if (reverseLetters.includes(stringAll[index])) {
			newString.push(reverseLetters[revIndex]);
			revIndex++;
		} else {
			newString.push(stringAll[index]);
		}
	}
	return newString.join('');
};

console.log(reverse('ab-cd-6-u'));
