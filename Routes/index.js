let express = require('express');
let path = require('path');
let multer = require('multer');
let fs = require('fs');
let { exec } = require('child_process');

// Initialize Router
var app = express.Router();

// Static File Serving
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public/uploads')));

// Multer Configuration for File Uploads
const upload = multer({ dest: 'public/uploads/' });

// Routes for Handlers
app.use('/login', require('./Handlers/login.js'));
app.use('/admin', require('./Handlers/admin.js'));
app.use('/staff', require('./Handlers/staff.js'));

// Route for Number Plate Detection
app.post('/detect-number-plate', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'No file uploaded.' });
    }

    const imagePath = req.file.path;
    const pythonScriptPath = path.join(__dirname, 'number_plate_detection.py');

    try {
        // Execute the Python script for number plate detection
        exec(`python ${pythonScriptPath} ${imagePath}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing Python script: ${error}`);
                return res.status(500).json({ success: false, message: 'Error executing Python script.', error: error.message });
            }

            if (stderr) {
                console.error(`Python stderr: ${stderr}`);
                return res.status(500).json({ success: false, message: 'Error in Python script processing.', stderr: stderr });
            }

            // The Python script will output the detected number plate or a failure message
            const plateNumber = stdout.trim();

            // Clean up uploaded file
            fs.unlink(imagePath, (err) => {
                if (err) console.error(`Failed to delete ${imagePath}:`, err);
            });

            if (plateNumber && plateNumber !== "No plate detected") {
                // Send the detected number plate in JSON format
                return res.json({ success: true, numberPlate: plateNumber });
            } else {
                return res.json({ success: false, message: 'No valid number plate detected in the image.' });
            }
        });
    } catch (error) {
        console.error('Error processing the image:', error);
        return res.status(500).json({ success: false, message: 'Server Error: Unable to process the image.', error: error.message });
    }
});

// Export Router
module.exports = app;
