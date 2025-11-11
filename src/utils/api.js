// src/utils/api.js

import axios from 'axios';

// NOTE: We assume the backend developer will set the base URL in a .env file 
// (e.g., VITE_API_BASE_URL=http://your-server-ip/api)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'; 

const flynetApiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// --- Request Interceptor for Authentication ---
flynetApiClient.interceptors.request.use(
    (config) => {
        // Retrieve the Bearer Token stored during login
        const token = localStorage.getItem('authToken'); 
        
        if (token) {
            // Apply the Bearer token header, as required by the Postman collection
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// --- Response Interceptor for Error Handling ---
flynetApiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // If unauthorized (401), force user logout
        if (error.response && error.response.status === 401) {
            console.error("Unauthorized API call. Token expired.");
            // In a full app, this would trigger the global logout function/redirect
            // localStorage.removeItem('user');
            // localStorage.removeItem('authToken');
            // window.location.href = '/login'; 
        }
        return Promise.reject(error);
    }
);

export default flynetApiClient;