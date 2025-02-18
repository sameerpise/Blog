import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Comments from "../Comments/Comments";
import '../animatedline/animeted.css'
import Addimage from '../../../src/assets/images/4.jpg'
import Addimage2 from '../../../src/assets/images/5.jpg'
import Addimage3 from '../../../src/assets/images/6.jpg'
import Addimage4 from '../../../src/assets/images/1.jpg'
// import styles from "./SinglePost.module.css";

export default function SinglePost() {
    const { id } = useParams(); // Get blog ID from URL
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBlog();
    }, []);

    // Fetch Single Blog Post
    const fetchBlog = async () => {
        try {
            const res = await fetch(`http://localhost:5000/blogs/${id}`);
            const data = await res.json();
            setBlog(data);
        } catch (err) {
            console.error("Error fetching blog:", err);
        }
    };

    if (!blog) return <p >Loading...</p>;

    return (
        < >
            <button  onClick={() => navigate(-1)}>⬅ Back</button>
            <h1 >{blog.title}</h1>
            {blog.imageUrl && <img src={`http://localhost:5000${blog.imageUrl}`} alt="Blog" />}
            <p >{blog.content}</p>
            <small >
                By <span >{blog.author}</span> | {new Date(blog.createdAt).toLocaleDateString()}
            </small>


        </>
    );
}
