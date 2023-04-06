var http = require('http');

function onrequest(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Welcome to Node.js Server.');
    response.end();
}

http.createServer(onrequest).listen(5050);

console.log("Server Created !!!");