const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars')

const app = express();

// app.engine('hbs', expressHbs.engine({layoutsDir:'views/layouts/',defaultLayout:'main',extname:'hbs'}));
app.set('view engine', 'ejs');
app.set('views', 'views');


const adminData = require('./routes/admin')
const shopRouters = require('./routes/shop');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin',adminData.routes);
app.use(shopRouters);


app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
})


app.listen(8080);