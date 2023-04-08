const ulElement = document.getElementById('first');

[1, 2, 3].forEach((item) => {
	const liElement = document.createElement('li');
	liElement.textContent = item;
	ulElement.appendChild(liElement);
});

const currentUrl = window.location.href;
console.log(currentUrl);
