let loginService = require('../Services/login');

exports.checkLogin = (req, res) => {
  loginService.checkLogin({

  },req,res);     
}

exports.changePassword = (req,res) => {
  loginService.changePassword({
    _id : req.session._id,
  },req,res);
}

exports.totalNoofUsers = (req, res) => {
  loginService.totalNoofUsers({
    
  },req,res); 
}

exports.totalNoofCategory = (req, res) => {
  loginService.totalNoofCategory({
    
  },req,res);
}

exports.totalNoofPasses = (req, res) => {
  loginService.totalNoofPasses({
    
  },req,res);
}

exports.totalReceiptsToday = (req, res) => {
  loginService.totalReceiptsToday({
    entryDate: req.body.entryDate
  },req,res);
}