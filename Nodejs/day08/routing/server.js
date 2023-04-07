var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req,res) {
    
    
    var path = url.parse(req.url).pathname;
    
    switch (path) {
        case '/':
            renderHTML('./index.html', res);
            break;
        case '/about':
            renderHTML('./about.html', res);
            break;
        case '/service':
            renderHTML('./service.html', res);
            break;
        case '/login':
            renderHTML('./login.html', res);
            break;
        case '/signup':
            renderHTML('./signup.html', res);
            break;
    
        default:
            res.writeHead(404);
            res.write("Page not found");
            res.end()

    }

}).listen(5050);

console.log("Server ON ... 5050");

function renderHTML(path, res) {
    fs.readFile(path, "UTF-8", function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write("File is not found ");
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
        }
        res.end();
    })
    
}