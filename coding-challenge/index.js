function getKeyByValue(object, value) {
	return Object.keys(object).find((key) => object[key] === value);
}

const isValidParentheses = (stringValue) => {
	const brackets = { '{': '}', '(': ')', '[': ']' };
	const parenthesesArr = [];
	for (const i in stringValue) {
		if (brackets[stringValue[i]]) {
			parenthesesArr.push(stringValue[i]);
		}
		if (Object.values(brackets).includes(stringValue[i])) {
			const parenthesesKey = getKeyByValue(brackets, stringValue[i]);
			if (parenthesesArr.includes(parenthesesKey)) {
				const index = parenthesesArr.indexOf(parenthesesKey);
				if (index !== -1) {
					parenthesesArr.splice(index, 1);
				}
			} else {
				return false;
			}
		}
	}
	return parenthesesArr.length === 0 ? true : false;
};

console.log(isValidParentheses('fdfsf90[[{(()){}{{}}(]{}}())'));
