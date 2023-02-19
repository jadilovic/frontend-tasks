import { memo } from 'react';

const TestMemo = memo((props) => {
	console.log(props.fun);
	console.log('test memo rendered');
	return (
		<div>
			<h1>Test Memo</h1>
		</div>
	);
});
export default TestMemo;
