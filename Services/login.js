const bcrypt = require('bcrypt');
let saltRounds = 10

var users = require('../Models/userSchema');
var category = require('../Models/categorySchema');
var passes = require('../Models/passSchema');
var receipts = require('../Models/receiptSchema');

exports.checkLogin = async function (query, req, res) {
   req.session.isLogin = 0;
    users.findOne({email: req.body.name}, function(error,result) {
        if(error)
        throw error;

        if(!result) 
            res.send("notexits");
        else {
            bcrypt.compare(req.body.password,result.password,function(err,resi) {
                if(resi == true) {
                  req.session.isLogin = 1;
                  req.session._id = result._id;      
                  req.session.role = result.role;

                  var re = req.session.redirectUrl || '/login/home';
                  res.send(re);
                }
                else {
                  res.send("false")
                }
           })    
        }
    })
}

exports.changePassword = async function (query, req, res) {

	bcrypt.hash(req.body.newpass, saltRounds, (err, hash) => {
    if(!err) {
      users.updateOne({"_id" : query},{$set: { "password" : hash}} ,
      function(error,result)
      {
        if(error)
          throw error;
            else{
              res.send("Password Changed Successfully")
            }
      })   
    }
    else {}
  }) 
}

exports.totalNoofUsers = async function (query, req, res) {
  users.countDocuments(function(e,count){
    res.send(JSON.stringify(count));
  });
}

exports.totalNoofCategory = async function (query, req, res) {
  category.countDocuments(function(e,count){
          res.send(JSON.stringify(count));
  });
}

exports.totalNoofPasses = async function (query, req, res) {
  passes.countDocuments(function(e,count){
          res.send(JSON.stringify(count));
  });
}

exports.totalReceiptsToday = async function (query, req, res) {
  receipts.countDocuments(query, function(error,count) {
        res.send(JSON.stringify(count));
  })
}