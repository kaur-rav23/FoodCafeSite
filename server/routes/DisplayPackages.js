const express = require('express');
const router = express.Router();

router.get('/packageData', (req, res) => {
    try {
        // Assuming global.packageData is already defined and contains the package data
        res.send(global.packageData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error: " + err.message);
    }
});

module.exports = router;
