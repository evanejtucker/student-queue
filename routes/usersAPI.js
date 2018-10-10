const express = require('express');
const users = express.Router();
const passport = require('passport');
require('../controller/passport')(passport);
require('../models/User');
const userController = require('../controller/userController');
const auth = require('../controller/middleware/auth');

users.get('/profile', auth.isLoggedIn, (req, res, next)=> {
    console.log('logged in successfully');
    res.send(req.user);
});

users.get('/logout', auth.logoutUser, (req, res, next)=> {
    console.log('user logged out');
    res.redirect('/');
});

users.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', 
    failureRedirect : '/login',
    failureFlash : true
}));

users.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', 
    failureRedirect : '/login', 
    failureFlash : true 
}));

users.get('/all', auth.isAdmin, (req, res, next)=> {
    userController.findAll(req, res);
});

users.get('/user/:user', (req, res, next)=> {
    userController.findOne(req, res);
});

users.get('/remove/:user', (req, res, next)=> {
    userController.removeOne(req, res);
    res.send('user was successfully removed');
});

users.post('/login-test', (req, res, next)=> {
    console.log(req.body);
    res.send(req.body);
});

module.exports = users;
