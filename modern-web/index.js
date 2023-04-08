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
