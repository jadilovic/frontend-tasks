import { Link } from 'react-router-dom';

const Usage = ({ mainRef, aboutRef, usageRef, handleScroll }) => {
	return (
		<div
			ref={usageRef}
			className="test"
			style={{
				backgroundColor: 'coral',
				// width: '300px',
				// minHeight: '100vh',
				// minWidth: '100vw',
				textAlign: 'center',
			}}
		>
			<h2>How to Use</h2>
			<div
				style={{
					fontSize: '24px',
					color: 'black',
					backgroundColor: 'lightyellow',
					cursor: 'pointer',
				}}
				onClick={() => handleScroll(mainRef)}
			>
				Main
			</div>
			<div onClick={() => handleScroll(aboutRef)}>About</div>
			{/* <ul>
				<li>
					<Link to="/">Scroll to Main</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul> */}
		</div>
	);
};
export default Usage;
