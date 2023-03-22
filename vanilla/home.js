console.log('test');

const one = setTimeout(display, 2000, 'first');
const two = setTimeout(display, 4000, 'second');
const three = setTimeout(display, 6000, 'third');

function display(order) {
	console.log(`${order} function`);
}

document.getElementById('myButton').onclick = () => {
	clearTimeout(two);
	clearTimeout(three);
	clearInterval(counting);
};

console.log('test2');

let max = Number(window.prompt('Enter number: '));

let num = 0;

const increase = (value) => {
	num += 1;
	console.log(`Counter: ${num}`);
	if (num === value) {
		clearInterval(counting);
	}
};

// const counting = setInterval(increase, 1000, max);

document.getElementById('myDate').innerHTML = new Date(
	2022,
	11,
	30,
	12,
	4,
	5,
	4
).toLocaleString();

const showTime = () => {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const amOrPm = hours >= 12 ? 'PM' : 'AM';
	document.getElementById('clock').innerHTML = `${hours % 12 || 12}/${
		minutes < 10 ? '0' + minutes : minutes
	}/${seconds < 10 ? '0' + seconds : seconds}${amOrPm}`;
};

const clockInterval = setInterval(showTime, 0);

console.time('response time');

// alert('click it');
setTimeout(() => {
	console.log('hello');
	console.timeEnd('response time');
}, 3000);

// console.timeEnd('response time');
