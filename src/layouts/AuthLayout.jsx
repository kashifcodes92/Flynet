// src/layouts/AuthLayout.jsx (FINAL BACKGROUND FIX)

import React from 'react';
import { Box, Paper, Grid, Typography } from '@mui/material';

const AuthLayout = ({ children, title = 'flynet', subtitle = 'Super Admin' }) => {
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            {/* Left Side: Dark Branding Area (Pattern Overlay) */}
            <Grid
                item
                xs={false}
                sm={4}
                md={6}
                sx={{
                    // CRITICAL FIX 1: Ensure background covers 100% height of the container
                    backgroundColor: (theme) => theme.palette.primary.main, 
                    height: '100vh', // Forces full viewport height for this column
                    
                    // Background image (network pattern)
                    backgroundImage: 'url(public\assets\SAAS-images\login-left-shapes.png)', // Use the specific left shape image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    p: 4,
                }}
            >
                <Box sx={{ textAlign: 'center' }}>
                    {/* Logo Image */}
                    <img 
                        src="public\images\auth-logo.png" // Use the specific auth logo
                        alt="flynet Logo" 
                        style={{ height: 60, marginBottom: 10 }}
                    />
                    <Typography variant="h6" sx={{ color: 'white', mb: 3 }}>
                        {subtitle}
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ maxWidth: 300, color: '#DDD' }}>
                        24/7 monitoring with advanced technology for continuous protection. Trust us for complete surveillance and total peace of mind
                    </Typography>
                </Box>
            </Grid>

            {/* Right Side: Form Content Area (Relies on Global Background) */}
            <Grid 
                item 
                xs={12} 
                sm={8} 
                md={6} 
                component={Paper} 
                elevation={0} 
                square
                sx={{
                    // CRITICAL FIX 2: Ensure background is transparent so global background shows
                    backgroundColor: 'transparent', 
                }}
            >
                <Box
                    sx={{
                        my: 4,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%', 
                    }}
                >
                    {children}
                </Box>
            </Grid>
        </Grid>
    );
};

export default AuthLayout;