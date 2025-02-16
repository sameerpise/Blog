import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    

    useEffect(() => {
        // Check if a token exists in localStorage
        const token = localStorage.getItem("token");
        if (token) {
            setUser({ token });
        }
    }, []);

    const login = (token) => {
        localStorage.setItem("token", token);
        setUser({ token });
       
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
