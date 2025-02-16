import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Import styles

export default function Auth() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Handle input change
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const url = isLogin 
                ? "https://blog-11-jc09.onrender.com/auth/login" 
                : "https://blog-11-jc09.onrender.com/auth/register";

            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message);

            if (isLogin) {
                localStorage.setItem("token", data.token);
                navigate("/create"); // Redirect after login
            } else {
                alert("Registration Successful! Please Login.");
                setIsLogin(true);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-container ">
            <h2>{isLogin ? "Login" : "Register"}</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                )}
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">{isLogin ? "Login" : "Register"}</button>
            </form>
            <p onClick={() => setIsLogin(!isLogin)} className="toggle-auth">
                {isLogin ? "New user? Register here." : "Already have an account? Login here."}
            </p>
        </div>
    );
}
