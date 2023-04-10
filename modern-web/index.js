const incrBtn = document.createElement('button');
const h1Count = document.createElement('h1');

h1Count.id = 'count';
h1Count.textContent = 0;
incrBtn.textContent = 'Increment';
document.body.appendChild(incrBtn);
document.body.appendChild(h1Count);

var count = 0;
function increment() {
	count++;
	document.getElementById('count').textContent = count;
}

incrBtn.addEventListener('click', () => {
	increment();
	h1Count.textContent = count;
});

console.log('index.js');

const add = (num1) => {
	return (num2) => {
		if (num2) return add(num1 + num2);
		return num1;
	};
};

console.log(add(6)(4)(3)());

const calc = {
	total: 0,
	add(val) {
		this.total += val;
		return this;
	},
	subtract(val) {
		this.total -= val;
		return this;
	},
	multi(val) {
		this.total *= val;
		return this;
	},
	divide(val) {
		this.total /= val;
		return this;
	},
};

console.log(calc.add(5).multi(4).divide(10).subtract(1));
console.log(calc.total);

document.querySelector('.products').addEventListener('click', (event) => {
	console.log(event.target.textContent);
	if (event.target.tagName === 'LI') {
		window.location.href += `#${event.target.id}`;
	}
});

const arr = [
	[1, 2, 3],
	[4, 5, 6, [99, 88]],
	[7, 8, 9],
];

const newArr = arr.flat(1);
console.log(newArr);

const recursion = (arr) => {
	const result = [];
	if (Array.isArray(arr)) {
	}
};

const doSomething = () => {
	console.log('doing something');
};

const myButton = document.getElementById('myButton');
myButton.onclick = doSomething;

console.log(arrTwo);
