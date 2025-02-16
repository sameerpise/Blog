const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const Middlewaree = require('../middleware/AuthMiddleawre')
const Blog = require("../model/Blog");

const router = express.Router();

// Configure Multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Get All Blogs
router.get("/all", async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: "Error fetching blogs", error: err.message });
    }
});

// Get a Single Blog by ID
router.get("/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });
        res.json(blog);
    } catch (err) {
        res.status(500).json({ message: "Error fetching blog", error: err.message });
    }
});

// Create a New Blog
router.post("/create", upload.single("image"), async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const newBlog = new Blog({
            title,
            content,
            author,
            imageUrl: req.file ? `/uploads/${req.file.filename}` : "",
        });

        await newBlog.save();
        res.status(201).json({ message: "Blog created successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error creating blog", error: err.message });
    }
});

// Update an Existing Blog
router.put("/edit/:id", upload.single("image"), async (req, res) => {
    console.log("Received Update Request for ID:", req.params.id); // Debugging log

    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            console.log("Invalid Blog ID:", req.params.id);
            return res.status(400).json({ message: "Invalid blog ID" });
        }

        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            console.log("Blog not found in DB:", req.params.id);
            return res.status(404).json({ message: "Blog not found" });
        }

        console.log("Updating Blog:", blog);

        blog.title = req.body.title || blog.title;
        blog.content = req.body.content || blog.content;
        blog.author = req.body.author || blog.author;
        if (req.file) blog.imageUrl = `/uploads/${req.file.filename}`;

        await blog.save();
        console.log("Blog Updated Successfully:", blog);
        res.json({ message: "Blog updated successfully", updatedBlog: blog });

    } catch (err) {
        console.error("Error updating blog:", err.message);
        res.status(500).json({ message: "Error updating blog", error: err.message });
    }
});



//// upadef blog//////
// Delete a Blog
router.delete("/delete/:id", async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: "Blog deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting blog", error: err.message });
    }
});

module.exports = router;
