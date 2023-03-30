const changeHeader = (id) => {
	return (content) => {
		document.querySelector('#' + id).textContent = content;
	};
};

const newContent = changeHeader('heading');

newContent('Big Boy Piss');
