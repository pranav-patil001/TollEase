let express = require('express');
var app = require('express').Router();
let path = require('path');

app.use(express.static(path.join(__dirname,'../../public')));

var auth = require('../../MiddleWares/auth');

let loginController = require('../../Controllers/login');

app.get('/home',auth.checkSession, function (req,res) {
  res.render('dashboard',{data:req.session,title : 'Dashboard'});
})

app.get('/changePassword',auth.checkSession, function(req,res) {
      res.render('changePassword',{data:req.session,title : 'Change Password'});
})

app.get('/logout_person',auth.checkSession, function(req,res) {
    req.session.isLogin = 0;
    req.session.destroy();
    res.render('login');
})

// controllers //

app.use(
	'/checkLogin',
	loginController.checkLogin
);

app.use(
	'/changePassword',
	auth.checkSession,
	loginController.changePassword
);

app.use(
	'/totalNoofUsers',
	auth.checkSession,
	loginController.totalNoofUsers
);

app.use(
	'/totalNoofCategory',
	auth.checkSession,
	loginController.totalNoofCategory
);

app.use(
	'/totalNoofPasses',
	auth.checkSession,
	loginController.totalNoofPasses
);

app.use(
	'/totalReceiptsToday',
	auth.checkSession,
	loginController.totalReceiptsToday
);

module.exports = app;