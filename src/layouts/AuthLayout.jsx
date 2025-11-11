// src/layouts/AuthLayout.jsx (FINAL AND COMPLETE CODE)

import React from 'react';
import { Box, Paper, Grid, Typography } from '@mui/material';
// CRITICAL FIX: Import the image as a module asset (Vite/Webpack required method)
import loginBackground from '../assets/images/login-background.jpg'; 

const AuthLayout = ({ children, title = 'flynet', subtitle = 'Super Admin' }) => {
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            {/* Left Side: Dark Branding Area (Login Screen) */}
            <Grid
                item
                xs={false}
                sm={4}
                md={6}
                sx={{
                    backgroundColor: (theme) => theme.palette.primary.main, 
                    
                    // FIX APPLIED: Use the imported variable for the backgroundImage URL
                    backgroundImage: `url(${loginBackground})`, 
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
                    {/* Logo path fix: Use the stable public path */}
                    <img 
                        src="/auth-logo.png" 
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

            {/* Right Side: Form Content Area */}
            <Grid item xs={12} sm={8} md={6} component={Paper} elevation={0} square>
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