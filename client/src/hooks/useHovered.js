import { useEffect, useRef, useState } from 'react';

export const useHovered = () => {
	const [value, setValue] = useState(false);
	const elementRef = useRef(null);

	const handleOver = () => setValue(true);
	const handleLeave = () => setValue(false);

	useEffect(() => {
		const node = elementRef.current;
		console.log(node);
		if (node) {
			node.addEventListener('mouseover', handleOver);
			node.addEventListener('mouseleave', handleLeave);

			return () => {
				node.removeEventListener('mouseover', handleOver);
				node.removeEventListener('mouseleave', handleLeave);
			};
		}
	}, []);

	return [elementRef, value];
};
