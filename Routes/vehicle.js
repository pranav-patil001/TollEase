// routes/vehicle.js

const express = require('express');
const router = express.Router();
const Vehicle = require('../Models/VehicleSchema');  // Ensure correct path

// Route to get all vehicles (already provided in the example)
router.get('/all-vehicles', async (req, res) => {
    try {
        const vehicles = await Vehicle.find(); // Retrieve all vehicles
        res.json({
            success: true,
            vehicles: vehicles
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Error fetching vehicles: ' + error.message
        });
    }
});

// Route to fetch vehicle details by vehicle number for autofill
router.get('/vehicle/:vehicleNumber', async (req, res) => {
    const { vehicleNumber } = req.params;  // Get vehicle number from URL
    try {
        const vehicle = await Vehicle.findOne({ vehicleNumber }); // Find vehicle by number
        if (vehicle) {
            res.json({
                success: true,
                vehicle: vehicle // Return vehicle details
            });
        } else {
            res.json({
                success: false,
                message: 'Vehicle not found'
            });
        }
    } catch (error) {
        res.json({
            success: false,
            message: 'Error fetching vehicle details: ' + error.message
        });
    }
});

module.exports = router;
