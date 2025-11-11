// src/pages/SuperAdmin/Dashboard.jsx

import React from 'react';
import { Box, Grid, Typography, Paper, useTheme, Button } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FilterListIcon from '@mui/icons-material/FilterList';

// Mock data based on Dashboard.jpg
const mockMetrics = [
    { title: 'All Business', value: '501', icon: BusinessIcon, color: '#00C8FF', valueColor: 'text.primary' },
    { title: 'Pending Registration', value: '01', icon: ListAltIcon, color: '#00C8FF', valueColor: 'text.primary' },
    { title: 'Due payments', value: '01', icon: PaymentIcon, color: '#00C8FF', valueColor: 'text.primary' },
    { title: 'Profit', value: '$500', icon: MonetizationOnIcon, color: '#4CAF50', valueColor: '#4CAF50' },
];

// Helper Component for the Metric Cards (Fidelity to Design)
const MetricCard = ({ title, value, icon: Icon, color, valueColor }) => {
    const theme = useTheme();
    return (
        <Paper elevation={0} sx={{ 
            p: 2, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            height: '100px', 
            borderRadius: 2,
            border: '1px solid #E0E0E0',
            backgroundColor: 'white',
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ 
                    p: 1.5, 
                    borderRadius: '50%', 
                    backgroundColor: theme.palette.background.default,
                    mr: 2 
                }}>
                    <Icon sx={{ fontSize: 24, color: color }} />
                </Box>
                <Box>
                    <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 0.5 }}>
                        {title}
                    </Typography>
                    <Typography variant="h5" fontWeight="bold" sx={{ color: valueColor }}>
                        {value}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};


export default function Dashboard() {
    const theme = useTheme();
    
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    Welcome Super
                </Typography>
                <Button 
                    variant="outlined" 
                    size="small" 
                    startIcon={<FilterListIcon />}
                    sx={{ textTransform: 'none', borderColor: '#CCC' }}
                >
                    Filter by day
                </Button>
            </Box>

            {/* Metric Cards Row */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
                {mockMetrics.map((metric) => (
                    <Grid item xs={12} sm={6} md={3} key={metric.title}>
                        <MetricCard {...metric} />
                    </Grid>
                ))}
            </Grid>

            {/* Map View Placeholder */}
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 2, color: theme.palette.text.primary }}>
                Geographical Overview
            </Typography>
            <Paper elevation={0} sx={{ 
                height: 450, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: '#E0E0E0',
                borderRadius: 2
            }}>
                <Typography variant="h5" color="textSecondary">
                    
                </Typography>
            </Paper>
        </Box>
    );
}