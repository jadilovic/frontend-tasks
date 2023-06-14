for (let i = 1; i < 100; i++) {
	let output = '';

	if (i % 3 === 0) output += 'Fizz';
	if (i % 5 === 0) output += 'Buzz';
	if (i % 10 === 0) output += 'Mazz';
	if (output === '') output += i;
	console.log(output);
}
for (let index = 0; index < 10; index++) {
	let content = '';
	if (index % 3) content += 'Buzz';
	if (content === '') {
	}
}
