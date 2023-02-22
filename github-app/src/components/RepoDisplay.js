import { useState, useEffect } from 'react';

const RepoDisplay = ({ repo, loading }) => {
	const [search, setSearch] = useState('');

	useEffect(() => {
		const timer = setTimeout(() => {
			console.log(search);
		}, 2000);
		return () => {
			clearTimeout(timer);
		};
	}, [search]);

	const handleDebounce = (e) => {
		setSearch(e.target.value);
	};
	if (loading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className="individual-items">
			<h4>Repo Details</h4>
			<div>
				<label htmlFor="name">Name: </label>
				<span>{repo.name}</span>
			</div>
			<div>
				<label htmlFor="forks">Forks: </label>
				<span>{repo.forks}</span>
			</div>
			<div>
				<label htmlFor="language">Language: </label>
				<span>{repo.language}</span>
			</div>
			<div>
				<label htmlFor="stars">Stars: </label>
				<span>{repo.stargazers_count}</span>
			</div>
			<h4>Debounce</h4>
			<input
				type="text"
				name="search"
				value={search}
				onChange={handleDebounce}
			/>
			<h6>{search}</h6>
		</div>
	);
};
export default RepoDisplay;
