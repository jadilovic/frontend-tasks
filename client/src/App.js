import './App.css';
import Counter from './components/Counter';
import { ThemeProvider } from './context/ThemeContext';
import { useThemeUpdate } from './context/ThemeContext';

function App() {
	const toggleDarkTheme = useThemeUpdate();
	return (
		<ThemeProvider>
			<button onClick={toggleDarkTheme}>Switch Theme</button>
			<Counter />
		</ThemeProvider>
	);
}

export default App;
