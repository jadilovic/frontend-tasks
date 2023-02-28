import { Link } from 'react-router-dom';

const About = ({ mainRef, aboutRef, usageRef, handleScroll }) => {
	return (
		<div
			ref={aboutRef}
			className="test"
			style={{
				backgroundColor: 'cornflowerblue',
				// width: '300px',
				// minHeight: '100vh',
				// minWidth: '100vw',
				textAlign: 'center',
			}}
		>
			<h2>About</h2>
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
			<div onClick={() => handleScroll(usageRef)}>How to Use</div>
			{/* <li>
				<Link to="/">Scroll to Main</Link>
			</li>
			<li>
				<Link to="/how-to-use">How to Use</Link>
			</li> */}
		</div>
	);
};
export default About;
