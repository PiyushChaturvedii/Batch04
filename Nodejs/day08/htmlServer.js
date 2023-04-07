var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    
    fs.readFile('./index.html', function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write('Page not found.');
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    })







}).listen(8000);

console.log('Server Listening on Port 8000')