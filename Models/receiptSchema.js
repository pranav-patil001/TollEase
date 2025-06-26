var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var receiptSchema = new mongoose.Schema({
	category : {
		type: String,
	},
	vehicleNumber : {
		type: String,
	},
	entryDate : {
		type: String,
	},
	entryTime : {
		type: String,
	},
	receiptdate : {
		type: Date,
	},
	trip : {
		type: String,
	},
	cost : {
		type: Number,
	},
})

module.exports =  mongoose.model('receiptes', receiptSchema);