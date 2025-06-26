var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new mongoose.Schema({
    name: {
    	type: String,
    },
    status: {
    	type: String,
    },
    createBy: {
    	type: String,
    },
})

module.exports =  mongoose.model('categories', categorySchema);