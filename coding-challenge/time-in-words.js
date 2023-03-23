/*
 * Complete the 'timeInWords' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER h
 *  2. INTEGER m
 */

function timeInWords(h, m) {
	// Write your code here
	const hours = {
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
	};

	const minutes = {
		0: "o' clock",
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'quarter',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		21: 'twenty one',
		22: 'twenty two',
		23: 'twenty three',
		24: 'twenty four',
		25: 'twenty five',
		26: 'twenty six',
		27: 'twenty seven',
		28: 'twenty eight',
		29: 'twenty nine',
		30: 'half past',
	};

	let pastOrTo = '';

	if (m > 30) {
		m = 30 - (m - 30);
		pastOrTo = 'to';
	} else {
		pastOrTo = 'past';
	}

	const hourWord = hours[h];
	const minWord = minutes[m];

	if (m === 0) {
		return `${hourWord} ${minWord}`;
	}

	if (m === 30) {
		return `half past ${hourWord}`;
	}

	if (pastOrTo === 'past' && m !== 15) {
		return `${minWord} minute${m > 1 ? 's' : ''} past ${hourWord}`;
	}

	if (pastOrTo === 'to' && m !== 15) {
		return `${minWord} minute${m > 1 ? 's' : ''} to ${hours[h + 1]}`;
	}

	if (pastOrTo === 'past' && m === 15) {
		return `${minWord} past ${hourWord}`;
	}

	if (pastOrTo === 'to' && m === 15) {
		return `${minWord} to ${hours[h + 1]}`;
	}
}

console.log(timeInWords(5, 45));
