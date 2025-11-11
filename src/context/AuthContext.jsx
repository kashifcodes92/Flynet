// src/context/AuthContext.jsx

import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// NOTE: We keep the import for loginUser to make the file structure complete, 
// but we won't call it in the current stable mock login function.
import { loginUser } from "../utils/apiService.js"; 

export const AuthContext = createContext(null);

// Function to check local storage for persistent login (Auth Token)
const getInitialUser = () => {
    // In a real application, you would check for localStorage.getItem('authToken');
    // For now, we return null to ensure the application starts UN-authenticated.
    return null; 
};

export const AuthProvider = ({ children }) => {
    // State starts as null to force the Login screen redirect
    const [user, setUser] = useState(getInitialUser); 
    const isAuthenticated = !!user;
    const navigate = useNavigate();

    // Effect to handle state changes (saving user/token on success, clearing on logout)
    useEffect(() => {
        if (user) {
            // This is where you would store the user object and token upon successful login
            // localStorage.setItem('user', JSON.stringify(user));
            // localStorage.setItem('authToken', user.token); 
        } else {
            // Clears any potential leftover data
            localStorage.removeItem('user');
            localStorage.removeItem('authToken');
        }
    }, [user]);


    // FINAL STABLE MOCK LOGIN LOGIC
    const login = async (email, password) => { // Remains async for future API switch
        try {
            // 1. Simulate API Call (Success if fields match mock credentials)
            if (email === "test@admin.com" && password === "******") { 
                
                // --- Switch to API Call when ready ---
                // const data = await loginUser({ email, password }); 
                // const { token, user: userData } = data;
                
                // Mock user object returned from successful API/Mock
                const userData = { name: "Super Admin", email, role: "TENANT_ADMIN" }; 
                
                // 2. Set State and Navigate
                setUser(userData); 
                navigate("/sa/dashboard"); 
                return true;
            } else {
                alert("Login Failed: Invalid credentials or network error.");
                return false;
            }

        } catch (error) {
            console.error("Login Failed:", error.message);
            alert("Login Failed: Invalid credentials or network error.");
            return false;
        }
    };

    const logout = () => {
        // Clear user state and navigate back to the login page upon logout
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, userRole: user?.role }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};