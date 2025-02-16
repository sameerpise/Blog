const Blog = require("../model/Blog");

const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

    const newBlog = new Blog({ title, content, author, imageUrl, user: req.user });
    await newBlog.save();

    res.status(201).json({ message: "Blog post created!", blog: newBlog });
  } catch (error) {
    res.status(500).json({ message: "Error creating blog post", error });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error });
  }
};

module.exports = { createBlog, getAllBlogs };
