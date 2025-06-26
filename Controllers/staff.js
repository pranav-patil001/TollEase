let staffService = require('../Services/staff');

var receipts = require('../Models/receiptSchema');
var passes = require('../Models/passSchema');

exports.addnewreceipt = (req,res) => {
  staffService.addnewreceipt({

  },req,res);
}

exports.twoWayCheck = (req,res) => {
  staffService.twoWayCheck({
    vehicleNumber: req.body.vehicleNumber,
    entryDate: req.body.entryDate,
    trip: "Two Way",
  },req,res);
}

exports.passVehicle = (req,res) => {
  staffService.passVehicle({
    registration: req.body.vehicleNumber
  },req,res);
}

exports.reducePassBalance = (req,res) => {
  staffService.reducePassBalance({

  },req,res);
}