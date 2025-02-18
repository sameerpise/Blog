import React, { useEffect, useState } from 'react';
import styles from './AllPost.module.css';
import { useNavigate } from 'react-router-dom';
import { getAllBlogs, deleteBlog } from '../services/Blogservice';
import './Allpost.css';

export default function Allpost() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const res = await fetch("http://localhost:5000/blogs/all");
            const data = await res.json();
            setBlogs(data);
        } catch (err) {
            console.error("Error fetching blogs:", err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            try {
                await deleteBlog(id);
                alert("Blog deleted successfully");
                fetchBlogs();
            } catch (err) {
                console.error("Error deleting blog:", err);
                alert("Error deleting blog");
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    return (
        <div className={styles.blogContainer}>
            <h2 className={styles.heading}>Latest Blog Posts</h2>
            {blogs.length === 0 ? (
                <p className={styles.noBlogs}>No blogs found.</p>
            ) : (
                blogs.map((blog) => (
                    <div key={blog._id} className={styles.blogCard}>
                        {blog.imageUrl && (
                            <img 
                                src={`http://localhost:5000${blog.imageUrl}`} 
                                alt="Blog" 
                                className={`${styles.blogImage} ${styles.zoomEffect}`}
                                onClick={() => navigate(`/blog/${blog._id}`)} // Navigate on click
                                style={{ cursor: "pointer" }}
                            />
                        )}
                        <h3 
                            className={styles.blogTitle} 
                            onClick={() => navigate(`/blog/${blog._id}`)} // Navigate on click
                            style={{ cursor: "pointer" }}
                        >
                            {blog.title}
                        </h3>
                        <p className={styles.blogContent}>{blog.content}</p>
                        <small className={styles.blogMeta}>
                            By <span className={styles.author}>{blog.author}</span> | {new Date(blog.createdAt).toLocaleDateString()}
                        </small>
                        <div className={styles.actions}>
                            <button className={styles.editBtn} onClick={() => handleEdit(blog._id)}>Edit</button>
                            <button className={styles.deleteBtn} onClick={() => handleDelete(blog._id)}>Delete</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
