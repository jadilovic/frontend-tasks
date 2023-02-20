const myMethods = (function () {
	const _data = [];
	const _render = () => {
		_logic();
		console.log('render data', _data);
	};
	const _logic = () => {
		console.log('listeners');
		_add();
	};
	const _remove = () => {
		console.log('remove');
	};
	const _add = () => {
		console.log('add');
		_data.push('abc');
	};
	return {
		render: _render,
	};
})();

myMethods.render();

const myModule = {
	data: [],
	render: () => {
		console.log('render');
	},
	doIt: () => {
		console.log('do it');
	},
	run: () => {
		console.log('run it');
	},
};

module.exports = myModule.render;
