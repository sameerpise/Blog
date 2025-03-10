import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

export default function Post() {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
    image: null,
    imagePreview: null,
  });

  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBlog({
        ...blog,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("content", blog.content);
    formData.append("author", blog.author);
    formData.append("image", blog.image);

    try {
      const response = await fetch("https://blog-11-jc09.onrender.com/blogs/create", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Blog created successfully!");
        navigate("/AllPost");
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <form className="blog-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <h2>Create Blog Post</h2>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
        <textarea name="content" placeholder="Content" onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" onChange={handleChange} required />
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} required />

        {/* Image Preview */}
        {blog.imagePreview && <img src={blog.imagePreview} alt="Preview" className="image-preview" />}

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}
