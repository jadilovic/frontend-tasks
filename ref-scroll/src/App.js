import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useRef, useState, useEffect } from 'react';
import About from './components/About';
import Main from './components/Main';
import Usage from './components/Usage';

function App() {
	const mainRef = useRef(null);
	const aboutRef = useRef(null);
	const usageRef = useRef(null);
	const containerRef = useRef(null);
	const nextButtonRef = useRef(null);
	const [scrollCount, setScrollCount] = useState(0);

	useEffect(() => {
		if (scrollCount < 0 || scrollCount > 2) {
			setScrollCount(0);
		}
		buttonScrolling();
	}, [scrollCount]);

	const handleScroll = (ref) => {
		containerRef.current.scrollTo({
			top: 0,
			left: ref.current.offsetLeft,
			behavior: 'smooth',
		});
	};

	const buttonScrolling = () => {
		containerRef.current.scrollTo({
			top: 0,
			left: scrollCount * 300,
			behavior: 'smooth',
		});
	};

	const buttonScrollNext = () => {
		setScrollCount((scrollCount) => scrollCount + 1);
	};

	const buttonScrollPrevious = () => {
		setScrollCount((scrollCount) => scrollCount - 1);
	};

	return (
		<div ref={containerRef} className="container">
			<Main
				mainRef={mainRef}
				aboutRef={aboutRef}
				usageRef={usageRef}
				handleScroll={handleScroll}
			/>
			<About
				mainRef={mainRef}
				aboutRef={aboutRef}
				usageRef={usageRef}
				handleScroll={handleScroll}
			/>
			<Usage
				mainRef={mainRef}
				aboutRef={aboutRef}
				usageRef={usageRef}
				handleScroll={handleScroll}
			/>
			<button
				className={`next ${scrollCount > 1 ? 'hide' : ''}`}
				onClick={() => buttonScrollNext()}
				ref={nextButtonRef}
			>
				Next
			</button>
			<button
				className={`previous ${scrollCount === 0 ? 'hide' : ''}`}
				onClick={() => buttonScrollPrevious()}
				ref={nextButtonRef}
			>
				Previous
			</button>
		</div>
		// <BrowserRouter>
		// 	<Routes>
		// 		<Route path="/" element={<Main />} />
		// 		<Route path="/about" element={<About />} />
		// 		<Route path="/how-to-use" element={<Usage />} />
		// 	</Routes>
		// </BrowserRouter>
	);
}

export default App;
