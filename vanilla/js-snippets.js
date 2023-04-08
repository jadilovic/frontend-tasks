const allEqual = (arr) => arr.every((item) => item === arr[0]);
console.log(allEqual([1, 2, 3]));
console.log(allEqual([2, 2, 2]));

const approximatelyEqual = (a, b, epsilon = 0.02) => Math.abs(a - b) < epsilon;
console.log(approximatelyEqual(Math.PI / 2, 1.58));

const average = (...arr) =>
	arr.reduce((acc, curr) => (acc += curr), 0) / arr.length;

console.log(average(...[1, 2, 3]));
console.log(average(1, 3, 4, 2));

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');
console.log(capitalize('dfdfHello'));

const compact = (arr) => arr.filter(Boolean);
console.log(compact([1, 2, '', NaN, false, 0, 7, 'test']));

const occurrences = (arr) =>
	arr.reduce((acc, curr) => (2 === curr ? acc + 1 : acc), 0);
console.log(occurrences([6, 7, 9, 2, 4, 2, 3, 2]));

const castArray = (value) => (Array.isArray(value) ? value : [value]);
console.log(castArray(['test']));

const dayOfYear = (date) =>
	Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 24 / 60 / 60);

console.log(dayOfYear(new Date()));
