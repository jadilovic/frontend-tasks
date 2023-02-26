// const body = document.querySelector('body');
// const container = document.querySelector('.container');
// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// document.addEventListener('click', (e) => {
// 	console.log('document');
// });

// body.addEventListener('click', (e) => {
// 	console.log('body');
// });

// container.addEventListener('click', (e) => {
// 	console.log('container');
// });

// grandparent.addEventListener('click', (e) => {
// 	console.log('grand parent');
// });

// const hi = () => {
// 	console.log('parent removed');
// };

// parent.addEventListener('click', hi);

// setTimeout(() => {
// 	parent.removeEventListener('click', hi);
// }, 2000);

// child.addEventListener('click', (e) => {
// 	console.log('child');
// });

// const divs = document.querySelectorAll('div');

// document.addEventListener('click', (e) => {
// 	if (e.target.matches('div')) {
// 		console.log(e.target);
// 	}
// });

const addGlobalEventListener = (type, selector, callBack) => {
	document.addEventListener(type, (e) => {
		if (e.target.matches(selector)) {
			callBack(e);
		}
	});
};

addGlobalEventListener('click', 'div', (e) => {
	console.log(e.target);
});

// divs.forEach((div) => {
// 	div.addEventListener('click', (e) => {
// 		console.log(e.target);
// 	});
// });

const div = document.createElement('div');
div.style.backgroundColor = 'purple';
div.style.width = '300px';
div.style.height = '300px';
document.body.appendChild(div);

const promise = new Promise((resolve, reject) => {
	const num = Math.ceil(Math.random() * 3);
	console.log(num);
	setTimeout(() => {
		if (num <= 1) {
			resolve('resolved');
		} else {
			reject('rejected');
		}
	}, 1000 * num);
});

promise.then((res) => console.log(res)).catch((err) => console.log(err));

const person = {
	name: 'Aki',
	walk: function () {
		console.log(this);
	},
};

person.walk();

const walking = person.walk.bind(person, ['hello', 'buy']);

log;

walking();

// console.log(person.walk());
