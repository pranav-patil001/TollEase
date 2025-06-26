const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    vehicleNumber: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    cost: { type: Number, required: true }
    // Add more fields if needed
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
