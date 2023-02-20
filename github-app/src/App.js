import { useEffect, useState } from 'react';
import './App.css';
import RepoDisplay from './components/RepoDisplay';

function App() {
	const [userName, setUserName] = useState('');
	const [loading, setLoading] = useState(false);
	const [repos, setRepos] = useState([]);
	const [repo, setRepo] = useState({});
	const [repoLoading, setRepoLoading] = useState(false);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		setRepos([]);
		setRepo({});
		setNotFound(false);
	}, [userName]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const response = await fetch(
				`https://api.github.com/users/${userName}/repos`
			);
			const data = await response.json();
			setRepos([...data]);
			setLoading(false);
			setNotFound(false);
		} catch (error) {
			console.log(error.message);
			setLoading(false);
			setNotFound(true);
		}
	};

	console.log(repos);

	const handleRepo = async (repoName) => {
		setRepoLoading(true);
		try {
			const response = await fetch(
				`https://api.github.com/repos/${userName}/${repoName}`
			);
			const data = await response.json();
			setRepo(data);
			console.log(data);
			setRepoLoading(false);
		} catch (error) {
			console.log(error.message);
		}
	};

	const renderRepo = (repo) => {
		return (
			<div onClick={() => handleRepo(repo.name)} className="row" key={repo.id}>
				<h5>{repo.name}</h5>
			</div>
		);
	};
	return (
		<div className="App">
			<header className="App-header">
				<div className="list">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="user-name"
							placeholder="GitHub Username"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
						<button type="submit">{loading ? 'Searching...' : 'Search'}</button>
					</form>
					<div>{repos.map(renderRepo)}</div>
					{notFound && (
						<h5>{`No repos with the user name '${userName}' were found!`}</h5>
					)}
				</div>
				<RepoDisplay repo={repo} loading={repoLoading} />
			</header>
		</div>
	);
}

export default App;
