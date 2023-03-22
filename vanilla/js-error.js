console.log('test');

const one = setTimeout(first, 2000);
const two = setTimeout(first, 4000);
const three = setTimeout(first, 6000);

function first() {
	console.log('first function');
}

document.getElementById('myButton').onclick(() => clearTimeout(two));

console.log('test2');
