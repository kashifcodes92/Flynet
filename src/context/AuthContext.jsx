// src/context/AuthContext.jsx (FINAL ROLE FIX)

import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, logoutUser } from "../utils/apiService.js"; 

export const AuthContext = createContext(null);

const getInitialUser = () => {
    return null; 
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getInitialUser); 
    const isAuthenticated = !!user;
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
            localStorage.removeItem('authToken');
        }
    }, [user]);


    // MOCK LOGIN FUNCTION IS NOW UPDATED TO ACCEPT userType
    const login = async (email, password, userType) => { 
        try {
            // Mock API Success Check
            if (email === "test@admin.com" && password === "******") { 
                
                // CRITICAL FIX: Use the selected userType to assign the role
                const userData = { name: "Test User", email, role: userType }; 
                
                // Store the token (mocking successful API call)
                // In a real app, data from loginUser() would contain token
                // and we would use userType to direct the navigation logic.
                
                // 1. Set State and Navigate
                setUser(userData); 
                
                if (userType === 'SUPER_ADMIN') {
                    navigate("/admin/dashboard"); 
                } else { // TENANT_ADMIN
                    navigate("/vms-client/my-cameras");
                }
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

    const logout = async () => {
        // Clear client-side state and redirect
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