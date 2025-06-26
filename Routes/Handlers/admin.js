let express = require('express');
var app = require('express').Router();
let path = require('path');

app.use(express.static(path.join(__dirname,'../../public')));

var auth = require('../../MiddleWares/auth');

let adminController = require('../../Controllers/admin');

app.get('/addStaff',auth.checkAdmin, function(req,res) {
  res.render('add_staff',{data:req.session,title : 'Add Staff'});
})

app.get('/manageStaff',auth.checkAdmin, function(req,res) {
  res.render('manage_staff',{data:req.session,title : 'Manage Staff'});
})

app.get('/addPass',auth.checkAdmin, function(req,res) {
  res.render('add_pass',{data:req.session,title : 'Add Pass'});
})

app.get('/managePass',auth.checkAdmin, function(req,res) {
  res.render('manage_pass',{data:req.session,title : 'Manage Pass'});
})

app.get('/passCount',auth.checkAdmin, function(req,res) {
  res.render('passCount',{data:req.session,title : 'Pass Count'});
})

app.get('/passSales',auth.checkAdmin, function(req,res) {
  res.render('passSales',{data:req.session,title : 'Pass Sales'});
})

app.get('/manageReceipts',auth.checkAdmin, function(req,res) {
  res.render('manageReceipts',{data:req.session,title : 'Manage Receipts'});
})

app.get('/receiptCount',auth.checkAdmin, function(req,res) {
  res.render('receiptCount',{data:req.session,title : 'Receipt Count'});
})

app.get('/receiptSales',auth.checkAdmin, function(req,res) {
  res.render('receiptSales',{data:req.session,title : 'Receipt Sales'});
})

// controllers //

app.use(
  '/addnewuser',
  auth.checkAdmin,
  adminController.addnewuser
);

app.use(
  '/checkemail',
  auth.checkAdmin,
  adminController.checkemail
);

app.use(
  '/showStaff',
  auth.checkAdmin,
  adminController.showStaff
);

app.use(
  '/deleteStaff/:pro',
  auth.checkAdmin,
  adminController.deleteStaff
);

app.use(
  '/categoryOptions',
  auth.checkSession,
  adminController.categoryOptions
);

app.use(
  '/addnewpass',
  auth.checkAdmin,
  adminController.addnewpass
);

app.use(
  '/showPass',
  auth.checkAdmin,
  adminController.showPass
);

app.use(
  '/deletePass/:pro',
  auth.checkAdmin,
  adminController.deletePass
);

app.use(
  '/FindpassesCount',
  auth.checkAdmin,
  adminController.FindpassesCount
);

app.use(
  '/FindpassesSale',
  auth.checkAdmin,
  adminController.FindpassesSale
);

app.use(
  '/showReceipts',
  auth.checkAdmin,
  adminController.showReceipts
);

app.use(
  '/FindreceiptCount',
  auth.checkAdmin,
  adminController.FindreceiptCount
);

app.use(
  '/FindreceiptSale',
  auth.checkAdmin,
  adminController.FindreceiptSale
);

app.use(
  '/deleteReceipt/:pro',
  auth.checkAdmin,
  adminController.deleteReceipt
);

module.exports = app;