import axios from 'axios';
function App() {
	const getDate = async () => {
		// const response = await fetch('http://localhost:5000/');
		// const date = await response.json();
		const response = await axios('http://localhost:5000/');
		console.log(response.data);
	};
	getDate();
	return (
		<div>
			<h1>React App</h1>
		</div>
	);
}

export default App;
