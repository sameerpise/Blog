import React, { useEffect, useState } from 'react';
import styles from './AllPost.module.css';
import { useNavigate } from 'react-router-dom';
import { getAllBlogs, deleteBlog, } from '../services/Blogservice';
import './Allpost.css'
export default function Allpost() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBlogs();
    }, []);

    // Fetch Blogs from API
    const fetchBlogs = async () => {
        try {
            const res = await fetch("https://blog-11-jc09.onrender.com/blogs/all");
            const data = await res.json();
            setBlogs(data);
        } catch (err) {
            console.error("Error fetching blogs:", err);
        }
    };

    // Delete Blog
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            try {
                await deleteBlog(id);
                alert("Blog deleted successfully");
                fetchBlogs(); // Refresh the blog list
            } catch (err) {
                console.error("Error deleting blog:", err);
                alert("Error deleting blog");
            }
        }
    };

    // Navigate to Edit Page
    const handleEdit = (id) => {
        navigate(`/edit/${id}`); // Redirect to edit page
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
                                src={`https://blog-11-jc09.onrender.com${blog.imageUrl}`} 
                                alt="Blog" 
                                className={`${styles.blogImage} ${styles.zoomEffect}`}
                            />
                        )}
                        <h3 className={styles.blogTitle}>{blog.title}</h3>
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
