import { useEffect } from 'react';
import './App.css';
import Counter from './components/Counter';
import Main from './components/Main';
import RefSample from './components/RefSample';
import { ThemeProvider } from './context/ThemeContext';

function App() {
	const handleClick = () => {
		alert('clicked anywhere in the app');
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

	return (
		<ThemeProvider>
			<Main />
			<RefSample />
			<Counter />
		</ThemeProvider>
	);
}

export default App;
