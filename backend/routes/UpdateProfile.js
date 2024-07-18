const express = require('express');
const User = require('../models/User'); // Adjust path to your User model
const bcrypt = require('bcrypt');
const authMiddleware = require('../middlewares/authMiddleware'); // Import your authentication middleware

const router = express.Router();

// Update Profile Route
router.put('/updateProfile', authMiddleware, async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const email = req.user.email; // Extract user email from authenticated request

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the current password provided matches the stored password
        const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid current password" });
        }

        // Hash the new password
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password with the hashed new password
        user.password = hashedNewPassword;
        await user.save();

        // Respond with success message
        res.json({ message: "Password changed successfully" });
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ message: `Server error: ${error.message}` });
    }
});

module.exports = router;
