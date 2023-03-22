const date = new Date();

console.log(date.getTime());

console.log(date.toLocaleString());

// const promise = new Promise((resolve, reject) => {
// 	const isLoaded = false;
// 	setTimeout(() => {
// 		if (isLoaded) {
// 			resolve('File was loaded');
// 		} else {
// 			reject('Not loaded');
// 		}
// 	}, 2000);
// });

// promise
// 	.then((result) => console.log(result))
// 	.catch((error) => console.log(error))
// 	.finally(console.log('done'));

const promise2 = (time) =>
	new Promise((resolve) => {
		setTimeout(resolve, time, 'aki');
	});

promise2(2000)
	.then((result) => console.log(result))
	.catch((error) => console.log(error));

async function loadFile() {
	const isLoaded = false;
	if (isLoaded) {
		return 'ASYNC - File was loaded';
	} else {
		throw 'ASYNC - Not loaded';
	}
}

const startProcess = async () => {
	try {
		await loadFile();
		console.log('in async function');
	} catch (error) {
		console.log(error);
	}
};

startProcess();
console.log('end');

// await loadFile()
// 	.then((result) => console.log(result))
// 	.catch((error) => console.log('Error: ', error));
