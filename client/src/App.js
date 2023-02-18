import './App.css';
import Counter from './components/Counter';
import { ThemeProvider } from './context/ThemeContext';

function App() {
	return (
		<ThemeProvider>
			<Counter />
		</ThemeProvider>
	);
}

export default App;
