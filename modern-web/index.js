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

const myInput = document.getElementById('myInput');
myInput.onchange = doSomething;

const myDiv = document.getElementById('myDiv');
const makeRed = () => {
	myDiv.style.backgroundColor = 'red';
};
const makeBlue = () => {
	myDiv.style.backgroundColor = 'blue';
};
const makeGreen = () => {
	myDiv.style.backgroundColor = 'green';
};
const makePink = () => {
	myDiv.style.backgroundColor = 'pink';
};

myDiv.style.height = '100px';
myDiv.style.width = '100px';
myDiv.style.backgroundColor = 'lightgreen';

myDiv.onmouseover = makeRed;
myDiv.onmouseout = makeBlue;
myDiv.onmousedown = makeGreen;
myDiv.onmouseup = makePink;

const outerDiv = document.getElementById('outerDiv');
const newDiv = document.getElementById('newDiv');
// newDiv.addEventListener('mouseover', changeToRed);
// newDiv.addEventListener('mouseleave', changeToBlue);
newDiv.addEventListener('click', changeToBlue);
outerDiv.addEventListener('click', changeToBlue, true);

function changeToRed() {
	newDiv.style.backgroundColor = 'red';
}

function changeToBlue(e) {
	alert(`You selected ${this.id}`);
	newDiv.style.backgroundColor = 'blue';
}

const imgBtn = document.getElementById('imgBtn');
const gImg = document.getElementById('gImg');

imgBtn.addEventListener('click', toggleImage);

function toggleImage() {
	if (gImg.style.visibility === 'hidden') {
		gImg.style.visibility = 'visible';
		imgBtn.textContent = 'Hide';
	} else {
		gImg.style.visibility = 'hidden';
		imgBtn.textContent = 'Show';
	}
}
function hideImage() {
	gImg.style.display = 'none';
	imgBtn.textContent = 'Show';
}

let topA = 0;
let left = 0;
const box = document.getElementById('box');
window.addEventListener('keydown', (event) => {
	console.log(event.key);
	switch (event.key) {
		case 'ArrowUp':
			topA -= 10;
			box.style.top = `${topA}px`;
			break;
		case 'ArrowDown':
			topA += 10;
			box.style.top = `${topA}px`;
			break;
		case 'ArrowLeft':
			box.style.left = `${(left -= 10)}px`;
			break;
		case 'ArrowRight':
			box.style.left = `${(left += 10)}px`;
			break;

		default:
			break;
	}
});

const anBtn = document.querySelector('#anBtn');
const anBox = document.querySelector('#anBox');
let horizontalMove = 0;
let verticalMove = 0;
let timerId = null;
let degrees = 0;
// let height = 100;
// let width = 100;
let scaleX = 1;
let scaleY = 1;

anBtn.addEventListener('click', moveToRight);

function moveToRight() {
	timerId = setInterval(() => {
		horizontalMove += 1;
		verticalMove += 1;
		degrees += 5;
		// height += 1;
		// width += 1;
		scaleX += 0.01;
		scaleY += 0.01;
		anBox.style.left = horizontalMove + 'px';
		anBox.style.top = verticalMove + 'px';
		anBox.style.transform = 'rotateZ(' + degrees + 'deg)';
		anBox.style.transform = 'scale(' + scaleX + ' , ' + scaleY + ')';
		// anBox.style.height = height + 'px';
		// anBox.style.width = width + 'px';
		if (horizontalMove >= 200 || verticalMove >= 200) {
			clearInterval(timerId);
		}
		console.log(scaleX);
	}, 5);
}

const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');

console.log(myCanvas);
// context.lineWidth = '10';
// context.strokeStyle = 'purple';
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250);
// context.stroke();
context.fillStyle = 'yellow';
context.lineWidth = 10;
context.strokeStyle = 'grey';
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.fill();
context.stroke();

const myWinBtn = document.querySelector('#myWinBtn');
myWinBtn.addEventListener('click', () => window.open('https://www.google.com'));

// const element = document.body;
// element.onload = doSomething;

// const myButton = document.getElementById('myButton');
// myButton.onclick = doSomething;
console.log('--------------------------------------------');
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.outerHeight);
console.log(window.outerWidth);
console.log(window.scrollX);
console.log(window.scrollY);
console.log(arrTwo);
