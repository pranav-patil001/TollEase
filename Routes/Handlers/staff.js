let express = require('express');
var app = require('express').Router();
let path = require('path');

app.use(express.static(path.join(__dirname,'../../public')));

var auth = require('../../MiddleWares/auth');

let staffController = require('../../Controllers/staff');

app.get('/addReceipts',auth.checkStaff, function(req,res) {
	res.render('addReceipts',{data:req.session,title : 'Add Receipt'});
})

app.get('/passUser',auth.checkStaff, function(req,res) {
  res.render('passUser',{data:req.session,title : 'Pass User'});
})

// controllers //

app.use(
	'/addnewreceipt',
	auth.checkStaff,
	staffController.addnewreceipt
);

app.use(
	'/twoWayCheck',
	auth.checkStaff,
	staffController.twoWayCheck
);

app.use(
	'/passVehicle',
	auth.checkStaff,
	staffController.passVehicle
);

app.use(
	'/reducePassBalance',
	auth.checkStaff,
	staffController.reducePassBalance
);

module.exports = app;