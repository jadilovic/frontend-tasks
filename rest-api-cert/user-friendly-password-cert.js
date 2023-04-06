const getCharacterDecimal = (char) => {
	return char.charCodeAt(0);
};

const hashingFunction = (text) => {
	const hashValue = text.split('').reduce((acc, curr, index) => {
		acc += getCharacterDecimal(curr) * Math.pow(131, text.length - index - 1);
		return acc;
	}, 0);
	return hashValue;
};

const setPassword = (value) => {
	const allPossibilities = [];
	allPossibilities.push(hashingFunction(value));
	for (let i = 0; i < 128; i++) {
		if (value.length < 2) {
			allPossibilities.push(hashingFunction(value + String.fromCharCode(i)));
		} else {
			allPossibilities.push(
				parseInt(
					hashingFunction(value + String.fromCharCode(i))
						.toString()
						.substring(2)
				) - 128
			);
		}
	}
	// console.log(allPossibilities);
	// return hashingFunction(value);
	return allPossibilities;
};

const authorize = (hashValue, hashedPasswords) => {
	console.log('test', hashValue, hashedPasswords);
	return hashedPasswords.includes(hashValue) ? 1 : 0;
};

const userFriendlyPassword = (events) => {
	let hashedPasswordsResult = [];
	const result = [];
	for (let i = 0; i < events.length; i++) {
		if (events[i][0] === 'setPassword') {
			hashedPasswordsResult = setPassword(events[i][1]);
		} else {
			result.push(authorize(parseInt(events[i][1]), hashedPasswordsResult));
		}
	}
	return result;
};

console.log(
	userFriendlyPassword([
		// ['setPassword', '000A'],
		// ['authorize', '108738450'],
		// ['authorize', '108738449'],
		// ['authorize', '244736787'],
		['setPassword', 'a'],
		['authorize', '97'],
		['authorize', '12756'],
	])
);
