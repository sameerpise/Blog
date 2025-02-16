require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");
const blogRoutes = require("./routes/BlogRoute");
const Auth =require("./routes/AuthRoutes")
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Routes

app.use("/blogs", blogRoutes);
app.use("/auth", Auth);
const UserSchema = new mongoose.Schema({
    email: String,
    password: String
});
const User = mongoose.model("User", UserSchema);

// Secret Key
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Register API
app.post("/auth/register", async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.json({ message: "User registered successfully" });
});

// Login API
app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
});


// Connect to MongoDB and Start Server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
