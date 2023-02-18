import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const useTheme = () => {
	return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
	return useContext(ThemeUpdateContext);
};

export const ThemeProvider = ({ children }) => {
	const [dark, setDark] = useState();

	const toggleDarkTheme = () => {
		setDark((dark) => !dark);
	};
	return (
		<ThemeContext.Provider value={dark}>
			<ThemeUpdateContext.Provider value={toggleDarkTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
};
