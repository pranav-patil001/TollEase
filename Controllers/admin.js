let adminService = require('../Services/admin');

exports.addnewuser = (req, res) => {
  adminService.addnewuser({
    
  },req,res);  
}

exports.checkemail = (req, res) => {
  adminService.checkemail({
    email: req.body.email,
  },req,res);  
}

exports.showStaff = (req, res) => {
  adminService.showStaff({
    
  },req,res);  
}

exports.deleteStaff = (req, res) => {
  adminService.deleteStaff({
    "_id": req.params.pro.toString(),
  },req,res);  
}

exports.categoryOptions = (req, res) => {
  adminService.categoryOptions({
    status: 'Active',
  },req,res);  
}

exports.addnewpass = (req, res) => {
  adminService.addnewpass({
    
  },req,res);  
}

exports.showPass = (req, res) => {
  adminService.showPass({
    
  },req,res);  
}

exports.deletePass = (req, res) => {
  adminService.deletePass({
    "_id": req.params.pro.toString(),
  },req,res);  
}

exports.FindpassesCount = (req, res) => {
  adminService.FindpassesCount({
    
  },req,res);  
}

exports.FindpassesSale = (req, res) => {
  adminService.FindpassesSale({
    
  },req,res);  
}

exports.showReceipts = (req, res) => {
  adminService.showReceipts({
    
  },req,res);  
}

exports.FindreceiptCount = (req, res) => {
  adminService.FindreceiptCount({
    
  },req,res);  
}

exports.FindreceiptSale = (req, res) => {
  adminService.FindreceiptSale({
    
  },req,res);  
}

exports.deleteReceipt = (req, res) => {
  adminService.deleteReceipt({
    "_id": req.params.pro.toString(),
  },req,res);  
}
