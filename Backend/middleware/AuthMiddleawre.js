const jwt = require("jsonwebtoken");
require("dotenv").config(); // Ensure environment variables are loaded

const JWT_SECRET = process.env.JWT_SECRET || "c2d95f8db4c5b5bd9b1cf805e020e60684dfc29198d0c5054d796559e594baab";

const authenticate = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    try {
        const verified = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
};

module.exports = authenticate;
