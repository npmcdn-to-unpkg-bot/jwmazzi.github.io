var http = require('http');
var fs = require('fs');


function onRequest(request, response) {

	if (request.method == 'GET' && request.url == '/'){
		response.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('./index.html').pipe(response);
	} else {
		console.log('Nope . . .');
	}

}

http.createServer(onRequest).listen(8888);
console.log('Running the server . . .');