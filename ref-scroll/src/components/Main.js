import { Link } from 'react-router-dom';

const Main = ({ mainRef, aboutRef, usageRef, handleScroll }) => {
	return (
		<div
			className="test"
			ref={mainRef}
			style={{
				backgroundColor: 'lightyellow',
				// minWidth: '100%',
				// minHeight: '100vh',
				// minWidth: '100vw',
				textAlign: 'center',
			}}
		>
			<h1>Main</h1>
			<div onClick={() => handleScroll(aboutRef)}>About</div>
			<div onClick={() => handleScroll(usageRef)}>How to Use</div>
			{/* <li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/how-to-use">How to use</Link>
			</li> */}
		</div>
	);
};
export default Main;
