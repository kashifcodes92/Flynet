// src/utils/apiService.js (FINAL AND COMPLETE CODE)

import flynetApiClient from './api.js';

// --- UTILITY FUNCTIONS ---

/**
 * Creates FormData required for file uploads and key/value pairs.
 */
const createFormData = (data) => {
    const formData = new FormData();
    for (const key in data) {
        if (data[key] !== undefined && data[key] !== null) {
            formData.append(key, data[key]);
        }
    }
    return formData;
};

// --- AUTHENTICATION AND USER MANAGEMENT ---

/**
 * Sends login credentials to the API to receive an auth token.
 * Endpoint: POST {{local}}/login
 */
export const loginUser = async ({ email, password }) => {
    try {
        const formData = createFormData({ email, password });
        const response = await flynetApiClient.post('/login', formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Invalidates the current user session.
 * Endpoint: POST {{local}}/logout
 */
export const logoutUser = async () => {
    try {
        const response = await flynetApiClient.post('/logout');
        return response.data;
    } catch (error) {
        // Continue even if server logout fails, clear client data regardless
        return error.response.data; 
    }
};

// --- BUSINESS MANAGEMENT ENDPOINTS ---

/**
 * Fetches the list of all registered business tenants.
 * Endpoint: GET {{local}}/business
 */
export const fetchAllBusinesses = async (params = {}) => {
    try {
        const response = await flynetApiClient.get('/business', { params });
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Creates a new business tenant.
 * Endpoint: POST {{local}}/business-save
 */
export const createBusiness = async (businessData) => {
    try {
        const formData = createFormData(businessData);
        const response = await flynetApiClient.post('/business-save', formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Updates an existing business tenant.
 * Endpoint: POST {{local}}/business-update
 */
export const updateBusiness = async (businessData) => {
    try {
        const formData = createFormData(businessData);
        const response = await flynetApiClient.post('/business-update', formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Updates the status of a business (e.g., Active/Inactive).
 * Endpoint: POST {{local}}/business-status
 */
export const updateBusinessStatus = async (id) => {
    try {
        const formData = createFormData({ id });
        const response = await flynetApiClient.post('/business-status', formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Deletes a business tenant.
 * Endpoint: POST {{local}}/business-delete
 */
export const deleteBusiness = async (id) => {
    try {
        const formData = createFormData({ id });
        const response = await flynetApiClient.post('/business-delete', formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};


// --- SUBSCRIPTION PACKAGE ENDPOINTS ---

/**
 * Fetches the list of all available subscription packages.
 * Endpoint: GET {{local}}/subscription-package
 */
export const fetchAllPackages = async () => {
    try {
        const response = await flynetApiClient.get('/subscription-package');
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Updates the status of a subscription package.
 * Endpoint: POST {{local}}/subscription-package-status
 */
export const updatePackageStatus = async (packageId) => {
    try {
        const formData = createFormData({ id: packageId });
        const response = await flynetApiClient.post('/subscription-package-status', formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};


// --- CAMERA MANAGEMENT ENDPOINTS ---

/**
 * Fetches the list of all cameras for the current tenant.
 * Endpoint: GET {{local}}/camera
 */
export const fetchCameraList = async (params = {}) => {
    try {
        const response = await flynetApiClient.get('/camera', { params });
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Fetches the summary count for cameras (Enabled, Online, etc.).
 * Endpoint: GET {{local}}/camera-count
 */
export const fetchCameraCount = async () => {
    try {
        const response = await flynetApiClient.get('/camera-count');
        return response.data;
    } catch (error) {
        throw error;
    }
};

/**
 * Saves a new camera registration.
 * Endpoint: POST {{local}}/camera-save
 */
export const saveCamera = async (cameraData) => {
    try {
        const formData = createFormData(cameraData);
        const response = await flynetApiClient.post('/camera-save', formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};