const http = require('http');

const server = http.createServer(router);

server.listen(5000, () => {
	console.log('Server is running on port 5000');
});

function router(req, res) {
	if (req.url === '/') {
		res.write('Hello There');
	}
	if (req.url === '/what') {
		res.write('Nothing');
	}
	if (req.url === '/data') {
		res.write("[{ 'name': 'Jasmin', 'age': 44 }]");
	}
	res.end();
}
