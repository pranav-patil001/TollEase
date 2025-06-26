var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	name : { 
		type: String,
	},
	email : {
		type: String,
	},
	password : {
		type: String,
	},
	address : {
		type: String,
	},
	gender : {
		type: String,
	},
	role : {
		type: String,
	},
	phone : {
		type: String,
	},
})

module.exports =  mongoose.model('users', userSchema);