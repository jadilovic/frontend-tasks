const body = document.body;

body.append('Hello World');

const divElement = document.createElement('div');
divElement.textContent = 'Hello';
divElement.innerText = 'What';
body.appendChild(divElement);

const div = document.querySelector('div');
console.log(div.textContent);
console.log(div.innerText);

const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

console.log(spanHi.getAttribute('title'));
console.log(spanBye.getAttribute('id'));
console.log(spanHi.title);
console.log(spanBye.id);
spanHi.setAttribute('title', 'I am your title');
console.log(spanHi.title);
spanBye.setAttribute('id', 'new id');
spanBye.removeAttribute('id');
console.log(spanBye.id);
console.log(spanHi.dataset.test);
console.log(spanBye.dataset);
console.log(spanBye.dataset.longName);
spanHi.dataset.shortName = 'Aki';
console.log(spanHi.dataset);
spanBye.classList.remove('hi2');
spanBye.classList.add('hi3');
console.log(spanBye.classList);
spanBye.classList.toggle('hi2');
spanBye.classList.toggle('hi3', true);
console.log(spanBye.classList);
div.style.backgroundColor = 'red';
div.style.display = 'inline-block';

// spanHi.remove();
// spanBye.remove();
// div.append(spanHi);
// div.removeChild(spanHi);

const div2 = document.createElement('div');
div2.innerHTML = '<strong>This is bold</strong>';
div.appendChild(div2);

const strong2 = document.createElement('strong');
strong2.innerText = 'This is bold 2';
div.append(strong2);

try {
	const x = window.prompt('Enter a number');
	if (isNaN(x)) {
		throw 'You entered not number';
	}
	if (x === '') {
		throw 'You entered empty string';
	}
	console.log(`You entered number ${x}`);
} catch (error) {
	console.log('Error: ', error);
} finally {
	console.log('Always runs');
}
