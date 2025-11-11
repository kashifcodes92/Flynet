// src/pages/VMS/SmartMosaic.jsx

import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function SmartMosaic() {
    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Smart Mosaic
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                AI-driven, optimized multi-view monitoring
            </Typography>

            <Paper elevation={0} sx={{ p: 5, border: '1px solid #E0E0E0', borderRadius: 2, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F0F4F8' }}>
                <Typography variant="h6" color="textSecondary">
                    
                    <br/>
                    Intelligent system selecting optimal camera views based on motion and alerts.
                </Typography>
            </Paper>
        </Box>
    );
}