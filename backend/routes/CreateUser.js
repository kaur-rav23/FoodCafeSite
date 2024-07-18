const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = "MyNameIsRavleenKaurGandhi";
const User = require('../models/User');

// Signup Route
router.post('/createuser', [
    // Input validations
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Password should be at least 5 characters long').isLength({ min: 5 })
], async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Check if email already exists
        let userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }

        // Hash password before saving
        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt);

        // Create a new user
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
            location: req.body.location
        });
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred. Please try again later." });
    }
});

// Login Route
router.post('/loginuser', [
    // Input validations
    body('email').isEmail(),
    body('password', 'Password should be at least 5 characters long').isLength({ min: 5 })
], async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const email = req.body.email;
        let userData = await User.findOne({ email });

        if (!userData) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        // Compare hashed password
        const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
        if (!pwdCompare) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }

        // Generate JWT token
        const data = { user: { id: userData._id } };
        const authToken = jwt.sign(data, jwtSecret);
        return res.json({ success: true, authToken: authToken });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

module.exports = router;
