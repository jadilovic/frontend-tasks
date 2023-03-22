import * as MathUtil from './circle.js';

console.log(MathUtil.PI, MathUtil.area(44));

document.title = 'My title';

document.body.style.backgroundColor = 'skyblue';

document.getElementById('myMenu').style.backgroundColor = 'lightgreen';

const fruits = document.getElementsByName('fruits');

fruits.forEach((fruit) => {
	if (fruit.checked) {
		console.log(fruit.value);
	}
});

const vegetables = document.getElementsByTagName('li');

vegetables[1].style.backgroundColor = 'grey';

const button = document.createElement('button');
button.textContent = 'Button JA';
document.body.append(button);

// button.onclick = () => console.log('clicked');
button.addEventListener('click', () => {
	window.open();
	console.log('clicked from event listener');
});

console.log(navigator.cookieEnabled);

const clock = document.getElementById('clock');

let seconds = 0;
let minutes = 0;
let hours = 0;

const addZero = (value) => {
	return value < 10 ? '0' + value : value;
};

const setClock = () => {
	clock.textContent = `${addZero(hours)}:${addZero(minutes)}:${addZero(
		seconds
	)}`;
};

let timer;
const startTimer = () => {
	if (!timer) {
		timer = setInterval(() => {
			seconds++;
			if (seconds === 60) {
				seconds = 0;
				minutes++;
			}
			if (minutes === 60) {
				minutes = 0;
				hours++;
			}
			if (hours === 24) {
				hours = 0;
				minutes = 0;
				seconds = 0;
			}
			setClock();
		}, 1000);
	}
};

document.getElementById('start').onclick = () => {
	startTimer();
};

document.getElementById('pause').onclick = () => {
	clearInterval(timer);
	timer = null;
};

document.getElementById('reset').onclick = () => {
	clearInterval(timer);
	timer = null;
	hours = 0;
	minutes = 0;
	seconds = 0;
	setClock();
};
