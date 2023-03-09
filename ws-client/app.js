// const socket = new WebSocket('ws://localhost:8080');

// socket.onmessage = ({ data }) => {
// 	console.log('Got from server', data);
// };

// document.querySelector('button').onclick = () => {
// 	socket.send('Clicked the button');
// };

// const socket = io('ws://localhost:8080');

// socket.on('message', (text) => {
// 	const liElement = document.createElement('li');
// 	liElement.textContent = text;
// 	const ulElement = document.querySelector('ul');
// 	ulElement.appendChild(liElement);
// });

// document.getElementById('chat').onclick = () => {
// 	const text = document.querySelector('input').value;
// 	console.log(text);
// 	socket.emit('message', text);
// };

const socket = io('ws://localhost:8080');

socket.on('message', (text) => {
	const el = document.createElement('li');
	el.innerHTML = text;
	document.querySelector('ul').appendChild(el);
});

document.getElementById('chat').onclick = () => {
	const text = document.querySelector('input').value;
	socket.emit('message', text);
};
