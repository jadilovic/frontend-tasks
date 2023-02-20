const RepoDisplay = ({ repo, loading }) => {
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
		</div>
	);
};
export default RepoDisplay;
