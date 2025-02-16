const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true }, // Store image URL
}, { timestamps: true });

module.exports = mongoose.model("Blog", BlogSchema);
