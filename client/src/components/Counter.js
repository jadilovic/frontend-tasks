import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTheme, useThemeUpdate } from '../context/ThemeContext';
import TestMemo from './TestMemo';

const Counter = () => {
	const counterRef = useRef();
	const footerRef = useRef();
	const dark = useTheme();
	const toggleDarkTheme = useThemeUpdate();
	const [on, setOn] = useState(false);

	useEffect(() => {
		const node = footerRef.current;
		node.addEventListener('mouseover', () => setOn(true));
		node.addEventListener('mouseleave', () => setOn(false));
		return () => {
			node.removeEventListener('mouseover', () => setOn(true));
			node.removeEventListener('mouseleave', () => setOn(false));
		};
	}, []);

	const someFunction = () => {
		return null;
	};

	const memorizedFunction = useCallback(someFunction, []);

	const largestNumber = () => {
		console.log('Getting the largest number');
		return 1000;
	};

	const largeNumber = useMemo(largestNumber, []);

	const counterStyle = {
		height: '200px',
		color: dark ? 'white' : 'black',
		backgroundColor: dark ? 'black' : 'white',
	};
	const footerStyle = {
		height: '200px',
		color: on ? 'yellow' : 'grey',
		backgroundColor: on ? 'grey' : 'yellow',
	};
	return (
		<div ref={counterRef} style={counterStyle}>
			<button onClick={toggleDarkTheme}>Switch Theme</button>

			<h1>Hello</h1>
			<TestMemo fun={memorizedFunction} />
			<h1>{`Largest number : ${largeNumber}`}</h1>
			<footer ref={footerRef} style={footerStyle}>
				Footer
			</footer>
		</div>
	);
};
export default Counter;
