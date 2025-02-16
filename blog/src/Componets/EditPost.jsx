import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBlogById, updateBlog } from "../services/Blogservice";
 // Add styles for preview

export default function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState({ title: "", content: "", author: "", image: null, imagePreview: null });

    useEffect(() => {
        fetchBlog();
    }, []);

    const fetchBlog = async () => {
        try {
            const data = await getBlogById(id);
            setBlog({ 
                title: data.title, 
                content: data.content, 
                author: data.author, 
                imagePreview: `https://blog-11-jc09.onrender.com${data.imageUrl}` 
            });
        } catch (err) {
            console.error("Error fetching blog:", err);
        }
    };

    const handleChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setBlog({ ...blog, image: file, imagePreview: URL.createObjectURL(file) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", blog.title);
        formData.append("content", blog.content);
        formData.append("author", blog.author);
        if (blog.image) formData.append("image", blog.image); // Append image only if changed

        try {
            const response = await updateBlog(id, formData);
            if (response.ok) {
                alert("Blog updated successfully!");
                navigate("/AllPost");
            } else {
                alert("Blog created successfully.");
                navigate("/AllPost");
            }
        } catch (err) {
            console.error("Error updating blog:", err);
            alert("Error updating blog.");
        }
    };

    return (
        <form className="blog-form" onSubmit={handleSubmit} encType="multipart/form-data">
            <h2>Edit Blog Post</h2>
            <input type="text" name="title" value={blog.title} onChange={handleChange} required />
            <textarea name="content" value={blog.content} onChange={handleChange} required />
            <input type="text" name="author" value={blog.author} onChange={handleChange} required />
            <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
            {blog.imagePreview && <img src={blog.imagePreview} alt="Preview" className="image-preview" />}
            <button type="submit">Update</button>
        </form>
    );
}
