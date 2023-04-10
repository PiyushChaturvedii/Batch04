const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</form>')
})


app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})



app.use('/', (req, res, next) => {
    res.send("<h1>Hello from Express.js</h1>")
})


console.log("Server listening on Port: 8000");
app.listen(8000);