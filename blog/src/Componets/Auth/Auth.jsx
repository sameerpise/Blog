import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import "./Auth.css"; // Import styles

export default function Auth() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Handle input change
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

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
                setSuccess("Login Successful! Redirecting...");
                setTimeout(() => navigate("/create"), 2000);
            } else {
                setSuccess("Registration Successful! Please Login.");
                setTimeout(() => setIsLogin(true), 5000);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? "Login" : "Register"}</h2>

            {/* Animated Error Message */}
            <AnimatePresence>
                {error && (
                    <motion.div 
                        className="alert error"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {error}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Animated Success Message */}
            <AnimatePresence>
                {success && (
                    <motion.div 
                        className="alert success"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {success}
                    </motion.div>
                )}
            </AnimatePresence>

            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                )}
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit" disabled={loading}>
                    {loading ? (isLogin ? "Logging in..." : "Registering...") : isLogin ? "Login" : "Register"}
                </button>
            </form>

            <p onClick={() => setIsLogin(!isLogin)} className="toggle-auth">
                {isLogin ? "New user? Register here." : "Already have an account? Login here."}
            </p>
        </div>
    );
}
