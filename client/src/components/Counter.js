import { useTheme, useThemeUpdate } from '../context/ThemeContext';

const Counter = () => {
	const dark = useTheme();
	const toggleDarkTheme = useThemeUpdate();

	const counterStyle = {
		height: '200px',
		color: dark ? 'white' : 'black',
		backgroundColor: dark ? 'black' : 'white',
	};
	return (
		<div style={counterStyle}>
			<button onClick={toggleDarkTheme}>Switch Theme</button>

			<h1>Hello</h1>
		</div>
	);
};
export default Counter;
