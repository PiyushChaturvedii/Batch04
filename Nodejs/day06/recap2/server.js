var http = require('http');
var evalute = require('./evaulate');
var custom = require('./custom');
var module3 = require('./module3')

function onrequest(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Welcome to Node.js Server.');
    response.write('\n' + evalute.add(5, 11));
    response.write('\n' + evalute.str);
    response.write('\n' + evalute.multiply(2,3));
    response.write('\n' + custom.dt());
    response.write('\n' + custom.mystr);
    response.write('\n' + custom.mystr2);
    response.write('\n' + module3.myfuction());
    response.end();
}













http.createServer(onrequest).listen(5050);

console.log("Server Created !!!");