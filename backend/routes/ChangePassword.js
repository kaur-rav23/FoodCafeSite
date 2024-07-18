// Change Password Route
const express = require('express');
const User = require('../models/User'); // Adjust path to your User model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/authMiddleware'); // Import your authentication middleware

const jwtSecret = "MyNameIsRavleenKaurGandhi"; // Secret key for JWT

const router = express.Router();

// Utility function to handle errors and send appropriate responses
const handleErrorResponse = (res, error) => {
    console.error(error);
    res.status(500).json({ message: `Server error: ${error.message}` });
};
router.put('/changePassword', authMiddleware, async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const email = req.user.email; // Middleware attaches user info

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid current password" });
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedNewPassword;
        await user.save();

        res.json({ message: "Password changed successfully" });
    } catch (error) {
        handleErrorResponse(res, error);
    }
});

module.exports = router;