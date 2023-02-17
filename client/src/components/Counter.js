import { useTheme } from '../context/ThemeContext';

const Counter = () => {
	const dark = useTheme();

	const counterStyle = {
		height: '200px',
		color: dark ? 'white' : 'black',
		backgroundColor: dark ? 'black' : 'white',
	};
	return (
		<div style={counterStyle}>
			<h1>Hello</h1>
		</div>
	);
};
export default Counter;
