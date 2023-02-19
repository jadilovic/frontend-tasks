import { useEffect, useRef, useState } from 'react';
import moment from 'moment';

const RefSample = () => {
	const inputRef = useRef();
	const timeRef = useRef(Date.now());
	const [list, setList] = useState([]);

	const data = [];

	for (let i = 1; i < 10; i++) {
		data.push({
			number: i,
			id: `id${i}`,
		});
	}

	useEffect(() => {
		inputRef.current.focus();
		setList([...data]);
		// setInterval(() => {
		// 	console.log(moment().diff(timeRef.current, 'seconds'));
		// 	if (moment().diff(timeRef.current, 'seconds') > 1) {
		// 		alert(
		// 			`you have been here ${moment().diff(timeRef.current, 'seconds')}`
		// 		);
		// 	}
		// }, 1000 * 2);
	}, []);

	const handleDelete = (id) => {
		const newData = data.filter((item) => item.id !== id);
		setList(newData);
	};

	console.log(inputRef.current);

	return (
		<div>
			<input type="text" ref={inputRef} />
			<button onClick={() => alert(inputRef.current.value)}>Test</button>
			{list.map((item) => (
				<div key={item.id} onClick={() => handleDelete(item.id)}>
					{item.number}
				</div>
			))}
		</div>
	);
};
export default RefSample;
