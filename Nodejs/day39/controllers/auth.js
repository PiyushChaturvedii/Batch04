const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');


const User = require('../models/user');

const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key: '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'
    }
}))

exports.getLogin = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        errorMessage: message
    });
}

exports.getSignup = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'Signup',
        errorMessage:message
    });
}

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                req.flash('error', 'Email not in Database.');
                return res.redirect('/login');
            }
            bcrypt
                .compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        return req.session.save(err => {
                            console.log(err);
                            res.redirect('/');
                        });
                    }
                    req.flash('error', 'Incorrect password.');
                    return res.redirect('/login');
                })
        })
        .catch(err => console.log(err));
}

exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    User.findOne({ email: email })
        .then(userDoc => {
            if (userDoc) {
            req.flash('error', 'E-Mail already exists, take different one.')
            return res.redirect('/signup');
        }
            return bcrypt
                .hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                    email: email,
                    password: hashedPassword,
                    cart: { items: [] }
                    });
            return user.save();
        })
        }).then(result => {
            res.redirect('/login')
            return transporter.sendMail({
                to: email,
                from: 'hello@aeeron.in',
                subject: 'Signup succeeded!',
                html: '<h1> You successfully signed up!</h1>'
            })
    }).catch(err=>console.log(err))
 };

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    })
}