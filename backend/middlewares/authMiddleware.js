// /middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');
const jwtSecret = "MyNameIsRavleenKaurGandhi"; // Your secret key for JWT

const authMiddleware = (req, res, next) => {
    // Extract token from authorization header
    const authorizationHeader = req.headers['authorization'];
    const token = authorizationHeader && authorizationHeader.split(" ")[1];

    // If no token, respond with error
    if (!token) {
        return res.status(401).json({ message: "Unauthorized access: Token not provided." });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded.user; // Attach user info to request object
        next(); // Pass control to the next middleware or route handler
    } catch (error) {
        console.error("Token verification error:", error);
        return res.status(401).json({ message: "Unauthorized access: Invalid token or session expired." });
    }
};

module.exports = authMiddleware;
