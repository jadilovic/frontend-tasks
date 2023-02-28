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

import { Person } from './person';

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

const walking = person.walk.bind(person);

walking();

// console.log(person.walk());

const sum = (number) => number + number;
console.log(sum(5));

const jobs = [
	{ id: 1, active: true },
	{ id: 2, active: true },
	{ id: 3, active: false },
];

const activeJobs = jobs.filter((item) => item.active);

console.log(activeJobs);

const boy = {
	run: function () {
		setTimeout(() => {
			console.log('this', this);
		}, 1000);
		// const self = this;
		// setTimeout(function () {
		// 	console.log('this', self);
		// });
		// console.log('this', this);
	},
};

boy.run();

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const total = [...arr1, 'a', ...arr2, 'b'];
console.log(total);

const me = { name: 'Aki' };
const be = { job: 'Developer' };

const newMeBe = { ...me, ...be };

console.log(newMeBe);

const clone = { ...me };

me.name = 'Cuni';
console.log(clone);
console.log(me);

// class Person {
// 	constructor(name, callBack, arr) {
// 		this.name = name;
// 		this.callBack = callBack;
// 		this.arr = arr;
// 	}

// 	showAll() {
// 		console.log(this.name);
// 		this.callBack();
// 		console.log(this.arr);
// 	}
// }

const laterRun = () => {
	setTimeout(() => {
		console.log('I am Hulk');
	}, 2000);
};

const bigPerson = new Person('Hulk', laterRun, [5, 6, 7]);

bigPerson.showAll();

class Teacher extends Person {
	constructor(name, degree, callBack, arr) {
		super(name, callBack, arr);
		this.degree = degree;
	}
	teach() {
		console.log(this.name + ' is teaching ' + this.degree);
	}
}

const teacher = new Teacher('Mario', 'BBS', () => console.log('my teacher'), [
	't',
	'c',
	'e',
]);
teacher.teach();
teacher.showAll();
