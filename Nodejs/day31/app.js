const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const errorController = require('./controllers/error');
const User = require('./models/user');
// const mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('646f43d0a55fc76aaf5a4e70')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// mongoConnect(() => {
//   app.listen(8000);
// })
mongoose
  .connect('mongodb+srv://aeeronbatch04:batchaeeron04@cluster0.jscrwfy.mongodb.net/shop?retryWrites=true')
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Ram',
          email: 'ram@gmail.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
    console.log('Database Connected...')
  })
  .catch(err => { console.log(err) })