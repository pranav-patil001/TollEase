var receipts = require('../Models/receiptSchema');
var passes = require('../Models/passSchema');

exports.addnewreceipt = async function (query, req, res) {
  receipts.create(req.body,function(error,result) {
        if(error)
        throw error;
        else
        	res.send("data saved");
  })         
}

exports.twoWayCheck = async function (query, req, res) {
  receipts.findOne(query, function(error,result) {
        if(error)
        throw error;

      if(!result)
        res.send("false");
      else 
          res.send("true");
   })        
}

exports.passVehicle = async function (query, req, res) {
  passes.findOne(query, function(error,result) {
      if(error)
        throw error;

      if(!result)
        res.send("false");
      else 
          res.send(result);
  })        
}

exports.reducePassBalance = async function (query, req, res) {
    passes.updateOne( {"registration" : req.body.registration}, {$set : req.body } , function(err,result) {
        if(err)
          throw err
        else 
            res.send("DATA UPDATED SUCCESFULLY")
    })        
}