import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();
export const AgeContext = React.createContext();
const StreetContext = React.createContext();

export const useTheme = () => {
	return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
	return useContext(ThemeUpdateContext);
};

export const useStreet = () => {
	return useContext(StreetContext);
};

export const ThemeProvider = ({ children }) => {
	const age = 44;
	const street = 'Maple';

	const [dark, setDark] = useState();

	const toggleDarkTheme = () => {
		setDark((dark) => !dark);
	};
	return (
		<ThemeContext.Provider value={dark}>
			<ThemeUpdateContext.Provider value={toggleDarkTheme}>
				<AgeContext.Provider value={age}>
					<StreetContext.Provider value={street}>
						{children}
					</StreetContext.Provider>
				</AgeContext.Provider>
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
};
