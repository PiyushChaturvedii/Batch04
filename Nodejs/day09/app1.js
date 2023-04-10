// const http = require('http');
const express = require('express');
const app = express();

console.log("Some text");


app.use((req, res, next) => {
    console.log("No: 1 In the middleware!!!");
    next(); //Allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
    console.log("No: 2 In the middleware!!!");
    next();
})

app.use((req, res, next) => {
    console.log("No: 3 In the middleware!!!");
    res.send('<h1>Hello from Express JS </h1>')
})

// const server = http.createServer(app);

app.listen(3000);