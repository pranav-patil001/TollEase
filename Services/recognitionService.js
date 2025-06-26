const { exec } = require('child_process');

function recognizePlate(imagePath, callback) {
    exec(`python plate_recognition.py ${imagePath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        callback(stdout);
    });
}

module.exports = { recognizePlate };
