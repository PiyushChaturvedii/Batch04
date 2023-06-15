const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const errorController = require('./controllers/error');
const User = require('./models/user');



const app = express();
require('dotenv').config();

const store = new MongoDBStore({
  uri: process.env.MONGODB_CONNECT_URI,
  collection: 'sessions'
})

const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret', 
    resave: false,
    saveUninitialized: false,
    store: store
  })
)

app.use(csrfProtection);

app.use((req, res, next) => {
  if(!req.session.user){
    return next();
  }
  User.findById(req.session.user._id).then(user => {
    req.user = user
      next()
  }).catch(err=>console.log(err))
})

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
})


app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

// mongoConnect(() => {
//   app.listen(8000);
// })
mongoose
  .connect(process.env.MONGODB_CONNECT_URI)
  .then(result => {
    const PORT = process.env.PORT
    app.listen(PORT);
    console.log('Database Connected...')
  })
  .catch(err => { console.log(err) })