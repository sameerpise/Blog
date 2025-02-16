import axios from'axios';

const API_URL = "https://blog-11-jc09.onrender.com/blogs";

export const getAllBlogs = async () => {
    const res = await fetch(`${API_URL}/all`);
    return await res.json();
};

export const getBlogById = async (id) => {
    const res = await fetch(`${API_URL}/${id}`);
    return await res.json();
};

export const createBlog = async (formData) => {
    const res = await fetch(`${API_URL}/create`, {
        method: "POST",
        body: formData,
    });
    return await res.json();
};

export const updateBlog = async (id, updatedData) => {
    try {
        const response = await axios.put(`https://blog-11-jc09.onrender.com/blogs/edit/${id}`, updatedData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error) {
        console.error("Error updating blog:", error.response?.data || error.message);
        throw error;
    }
};



export const deleteBlog = async (id) => {
    const res = await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
    });
    return await res.json();
};
