// src/pages/SuperAdmin/Packages.jsx

import React from 'react';
import { Box, Typography, Button, Grid, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// CRITICAL FIX: Use the absolute alias '@' for guaranteed resolution
import PackageCard from '@/components/feature/PackageCard.jsx'; 

// Mock Data based on Packages.png
const mockPackages = [
    { 
        id: 1, name: 'Starter - Free', price: 'Free', interval: '1 Months', status: 'Active',
        features: ['1 Business Location', '2 Users', '30 Products', '30 Invoices', '10 Trial Days', 'E-commerce Module'],
        description: 'Give it a test drive...'
    },
    { 
        id: 2, name: 'Regular', price: '199.99', interval: '1 Months', status: 'Active',
        features: ['Unlimited Business Locations', 'Unlimited Users', 'Unlimited Products', 'Unlimited Invoices', '10 Trial Days', 'Repair Module'],
        description: 'For Small Shops'
    },
    { 
        id: 3, name: 'Unlimited', price: '599.99', interval: '1 Months', status: 'Active',
        features: ['Unlimited Business Locations', 'Unlimited Users', 'Unlimited Products', 'Unlimited Invoices', '10 Trial Days'],
        description: 'For Large Business'
    },
    { 
        id: 4, name: 'Business Pro', price: '259.99', interval: '1 Months', status: 'Inactive',
        features: ['10 Business Locations', '10 Users', '150 Products', '1000 Invoices', '10 Trial Days'],
        description: 'For Small & Growing Shops...'
    },
];

export default function Packages() {
    // You would fetch package data from the Laravel API here
    
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    Packages
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" sx={{ textTransform: 'none' }}>
                        Update
                    </Button>
                    <Button 
                        variant="contained" 
                        color="secondary"
                        startIcon={<AddIcon />}
                        // This button would navigate to the Add Packages form
                        onClick={() => console.log('Navigate to Add Package Form')}
                        sx={{ textTransform: 'none' }}
                    >
                        + Add Package
                    </Button>
                </Stack>
            </Stack>

            {/* Package Cards Grid */}
            <Grid container spacing={3}>
                {mockPackages.map((pkg) => (
                    <Grid item xs={12} sm={6} md={4} key={pkg.id}>
                        <PackageCard packageData={pkg} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}