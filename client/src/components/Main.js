import React, { useContext, useState } from 'react';
import { AgeContext } from '../context/ThemeContext';
import { useStreet } from '../context/ThemeContext';
import { useHovered } from '../hooks/useHovered';

const NameContext = React.createContext();

const Main = () => {
	const name = 'Aki';
	return (
		<NameContext.Provider value={name}>
			<Child />
		</NameContext.Provider>
	);
};

const Child = () => {
	return <GrandChild />;
};

const GrandChild = () => {
	const contextName = useContext(NameContext);
	const contextAge = useContext(AgeContext);
	const street = useStreet();
	const [hoverRef, hovered] = useHovered();
	//	const [hovered, setHovered] = useState(false);

	const styleH1 = { backgroundColor: hovered ? 'lightgreen' : '' };

	return (
		<h1
			// onMouseOver={() => setHovered(true)}
			// onMouseLeave={() => setHovered(false)}
			ref={hoverRef}
			style={styleH1}
		>{`Test: ${contextName} and age: ${contextAge} and street: ${street}`}</h1>
	);
};
export default Main;
