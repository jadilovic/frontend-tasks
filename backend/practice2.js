/**
 * Write a function to determine if one String is
 * a case-insensitive anagram of another String
 */

let isAnagram = function (str1, str2) {
	// if (str1.length === str2.length) {
	// 	let anagram = true;
	// 	str1.split('').forEach((letter) => {
	// 		if (!str2.includes(letter)) {
	// 			console.log(letter, str2.includes(letter));
	// 			anagram = false;
	// 		}
	// 	});
	// 	return anagram;
	// }
	// return false;
	const strSor1 = str1.split('').sort().join('').toLowerCase();
	const strSor2 = str2.split('').sort().join('').toLowerCase();

	if (strSor1 === strSor2) {
		return true;
	}
	return false;
};

console.log(isAnagram('hello', 'jello'));
console.log(isAnagram('hello', 'loelh'));

/**
 * Write a function to determine the largest difference
 * between any two numbers in an array of numbers
 */

let numbers = [12, 2, 5, 5, 6, 5, 9, 9, 9, 10, 33];

let difference = (function (arr) {
	console.log(arr);
	const newArr = [...new Set(arr)];
	const sorted = newArr.sort((a, b) => a - b);
	console.log(sorted);
	return Math.max(...newArr) - Math.min(...newArr);
})(numbers);

console.log(difference);

/**
 * Write a function to determine if the supplied string is a palindrome
 * Eg:  radar,  racecar, kayak, and redder are all palidromes
 * They are the spelled same backwards and forwards
 */

let palindrome = function (word) {
	console.log(word, word.split('').reverse().join('').toLowerCase());
	if (word.toLowerCase() === word.split('').reverse().join('').toLowerCase()) {
		return true;
	}
	return false;
};

console.log(palindrome('radar')); //true
console.log(palindrome('redder')); //true
console.log(palindrome('window')); //false

(function f1() {
	var a = 1,
		b = 1;
	var x = (y = 2);
})();
(function f2() {
	let j = 1,
		k = 1;
	let r = (s = 2);
})();

//what are the values for a, b, x, y, j, k, r, s in the global scope?
//which of these variables will exist on the window/global object?
console.log(global.s);
console.log(global.a);
console.log(global.b);
console.log(global.x);
console.log(global.y);
console.log(global.j);
console.log(global.k);
console.log(global.r);

const textColor = (rgb) => {
	const color = rgb.substring(1);
	const red = parseInt(color.substring(0, 2), 16);
	const green = parseInt(color.substring(2, 4), 16);
	const blue = parseInt(color.substring(4, 6), 16);
	const intensity = red * 0.3 + green * 0.6 + blue * 0.1;
	if (intensity > 180) {
		return '#000000';
	} else {
		return '#ffffff';
	}
};

console.log(textColor('#BADA55')); //a bright green
console.log(textColor('#F0E68C')); //khaki
console.log(textColor('#990000')); //rebeccapurple
console.log(textColor('#6495ED')); //cornflowerblue

const vowels = ['a', 'i', 'e', 'o', 'u'];

const reverseVowels = (word) => {
	const wordVowels = word.split('').filter((letter) => vowels.includes(letter));
	const newWord = word
		.split('')
		.map((letter) => {
			if (vowels.includes(letter)) {
				return wordVowels.pop();
			} else {
				return letter;
			}
		})
		.join('');
	return newWord;
};

console.log(reverseVowels('hello'));
console.log(reverseVowels('hello javascript'));
console.log(reverseVowels('javascript'));
console.log(reverseVowels('bobi'));

/**
 * What will be the output of the following console.log?
 */

let obj = {
	a: 'three',
	b: 4,
	c: 'five',
	a: 3,
	b: 'four',
	c: 'five',
	a: 'tre',
	b: 'fyra',
	c: 5,
};
console.log(obj);

/***
 * What will be the output of this code and why?
 */
let obja = { a: 1 };
let objb = obja;

if ({ a: 1 } === { a: 1 }) {
	console.log('Monday');
} else if ({ a: 1 } == { a: 1 }) {
	console.log('Tuesday');
} else if (obja == { a: 1 }) {
	console.log('Wednesday');
} else if (obja == objb) {
	console.log('Thursday');
} else if (Object.is(obja, objb)) {
	console.log('Friday');
} else {
	console.log('Saturday');
}

/**
 * What will the output of the following two loops be?
 */
const numbersArr = [1, 2, 3];
numbersArr[10] = 11;

for (let i = 0; i < numbersArr.length; i++) {
	console.log(i, numbersArr[i]);
}
numbersArr.forEach((num, idx) => {
	console.log(idx, num);
});

/**
 * Create an example of a callback function with multiple parameters
 * and then show it being used
 */

const myCallBack = (goodFun, badFun, person) => {
	setTimeout(() => {
		if (person.isGood) {
			goodFun(person.name);
		} else {
			badFun(person.name);
		}
	}, 2000);
};

let goodGuy = function (name) {
	console.log('Depending on the season,', name, 'is a good guy');
};
let badGuy = function (name) {
	console.warn('Depending on the season,', name, 'is a bad guy');
};
let app = (function () {
	const castiel = { name: 'Castiel', isGood: true };
	const crowley = { name: 'Crowley', isGood: false };
	//use callback function here
	myCallBack(goodGuy, badGuy, castiel);
	myCallBack(goodGuy, badGuy, crowley);
})();

const myCB = (fun, name) => {
	setTimeout(() => {
		fun(name);
	}, 3000);
	setTimeout(fun, 5000, name);
};

const someFun = (person) => {
	console.log(`Hello ${person}`);
};

const mainFun = () => {
	const boy = 'boy';
	const girl = 'girl';

	myCB(someFun, boy);
	myCB(someFun, girl);
};

mainFun();

/**
 * Finish the following script to extends the built-in
 * JavaScript String Object
 * so it has a method which will reverse the order of
 * characters in a string and return the resulting reversed string.
 * It should run with code provided.
 *
 * Bonus marks if it ignores punctuation at the end of the String.
 */
function reverseOrder() {
	const endRegex = /[!.?]/;
	const reverseString = this.split('').reverse().join('');
	const endMatch = reverseString.match(endRegex);
	return endMatch ? reverseString.substring(1) + endMatch[0] : reverseString;
}

let str = 'Can I use Google during the interview?';
String.prototype.flip = reverseOrder;
console.log(str.flip());

/**
 * What will the value of the three log statements be?
 */
let n1 = 111;
let n2 = new Number(123);
let n3 = Number(123);
n1.prop = true;
n2.prop = true;
n3.prop = true;
console.log(n1, n1.prop);
console.log(n2, n2.prop);
console.log(n3, n3.prop);
console.log(
	'------------------------------------------------------------------'
);

/**
 * Variable Scope
 * What will be the output of the three log statements
 * and in what order?
 */
(() => {
	let one, two;
	try {
		throw new Error(321);
	} catch (one) {
		(one = 123), (two = 321);
		console.log(one);
	}
	console.log(one);
	console.log(two);
})();

console.log('-------------------------------------------------------------');
/**
 * What will the output of the following statements be?
 */

let log = console.log;
log(!!true);
log(!!'');
log(!!1);
log(!!-1);
log(!!NaN);
log(!!undefined);
log(!!'false');
log(!!null);

/**
 * What will be the value stored in the variable n?
 *
 */

let n = ((x = 1), (y = 2), (z = 0));

console.log(n);

console.log(
	'--------------------------------------------------------------------------------'
);

/**
 * What will be the output of the following statements?
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

let logOut = console.log;
logOut(+'1');
logOut(+true);
logOut(+false);
logOut(+'');
logOut(+'hello');
logOut(+1);

/**
 * Which of the following lines will return a true and
 * which will return false?
 */

console.log(['a', 'b'] == ['a', 'b']);
console.log(['a', 'b'] == ['a', 'b'] + []);
console.log(['a', 'b', 'c'] == ['a', 'b'] + []);
console.log(['a', 'b'] == ['b', 'a']);
console.log(['a', 'b'] == 'a,b');
