import { useEffect, useState } from 'react';
import './App.css';
import RepoDisplay from './components/RepoDisplay';
import { Girl } from './girl';
import { Wolf } from './wolf';
import { Employee, employee } from './employee';

function App() {
	const [userName, setUserName] = useState('');
	const [loading, setLoading] = useState(false);
	const [repos, setRepos] = useState([]);
	const [repo, setRepo] = useState({});
	const [repoLoading, setRepoLoading] = useState(false);
	const [notFound, setNotFound] = useState(false);

	const girlInstance = new Girl('Suzy', 'Bear', () => console.log('react'), [
		'done',
	]);

	const wolfInstance = new Wolf('Alfa', 'Grmec', 'Rabbit', () =>
		console.log('wou wou wout')
	);

	const employee1 = new Employee('Aki', 1000, 2, 10);

	useEffect(() => {
		// girlInstance.showAll();
		// wolfInstance.showEating();
		// wolfInstance.showLocation();
		// wolfInstance.callBackNoise();
		// wolfInstance.promotionOnTV();
		employee1.getWage();
		employee.name = 'Bob';
		employee.base_salary = 3000;
		employee.getWage();
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
			window.location.href = `#${repoName}`;
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
