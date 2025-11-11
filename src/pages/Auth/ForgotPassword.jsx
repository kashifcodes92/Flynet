// src/pages/Auth/ForgotPassword.jsx

import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import AuthLayout from '../../layouts/AuthLayout.jsx'; 
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock: In a real app, this sends a reset link via the Laravel API.
        console.log("Password reset requested for:", email);
        alert("If the email exists, a reset link has been sent!");
        navigate('/login');
    };

    return (
        <AuthLayout>
            <Box sx={{ maxWidth: 400, width: "100%", textAlign: "left", p: 4, border: '1px solid #EEE', borderRadius: 2 }}>
                
                <Typography component="h1" variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                    Forgot Password?
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 3 }}>
                    Enter your email to receive a reset link.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: "100%" }}>
                    <TextField
                        label="Email Address"
                        placeholder="test@gmail.com"
                        type="email"
                        fullWidth
                        required
                        margin="normal"
                        size="medium"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="secondary" 
                        fullWidth 
                        sx={{ mt: 3, textTransform: 'none' }}
                    >
                        Confirm
                    </Button>
                </Box>
                
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Typography variant="body2">
                        <a href="/login">Return to Login</a>
                    </Typography>
                </Box>
            </Box>
        </AuthLayout>
    );
}