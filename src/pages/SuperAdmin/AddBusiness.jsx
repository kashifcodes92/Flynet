// src/pages/SuperAdmin/AddBusiness.jsx

import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Paper, Grid, Divider, Stack, MenuItem, InputAdornment } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import UploadIcon from '@mui/icons-material/Upload';

export default function AddBusiness() {
    const [businessData, setBusinessData] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would call createBusiness(businessData) API service
        console.log("Submitting new business data:", businessData);
        alert("New Business data submitted (Mock)");
    };
    
    // Mock data options
    const currencyOptions = ['USD', 'EUR', 'PKR'];
    const timezoneOptions = ['Asia/Karachi', 'Asia/Kolkata', 'America/New_York'];

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Add New Business
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                Onboard a new tenant and configure their access details
            </Typography>

            <Paper elevation={0} sx={{ p: 4, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* --- Business Details Section --- */}
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
                    Business Details
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField required label="Business Name" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required label="Start Date" type="date" InputLabelProps={{ shrink: true }} fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField select required label="Currency" fullWidth size="small" defaultValue="USD">
                            {currencyOptions.map(code => <MenuItem key={code} value={code}>{code}</MenuItem>)}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Website" fullWidth size="small" />
                    </Grid>
                    
                    {/* Logo and Contact Information */}
                    <Grid item xs={12} sm={6}>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Typography variant="body2">Upload Logo:</Typography>
                            <Button variant="outlined" component="label" startIcon={<UploadIcon />} size="small">
                                Browse
                                <input type="file" hidden />
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Business Contact Number" fullWidth size="small" />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <TextField select required label="Time zone" fullWidth size="small" defaultValue="Asia/Kolkata">
                            {timezoneOptions.map(zone => <MenuItem key={zone} value={zone}>{zone}</MenuItem>)}
                        </TextField>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                {/* --- Owner Information Section --- */}
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
                    Owner Information
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField required label="First Name" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required label="Last Name" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required label="Username" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required label="Email" type="email" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required label="Password" type="password" fullWidth size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required label="Confirm Password" type="password" fullWidth size="small" />
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                {/* --- Package & Payment Section --- */}
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
                    Package Assignment
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <TextField select label="Packages" fullWidth size="small" defaultValue="Starter">
                            <MenuItem value="Starter">Starter - Free</MenuItem>
                            <MenuItem value="Regular">Regular</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField select label="Paid Via" fullWidth size="small" defaultValue="Cash">
                            <MenuItem value="Cash">Cash</MenuItem>
                            <MenuItem value="Stripe">Stripe</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField label="Payment Transaction ID" fullWidth size="small" />
                    </Grid>
                </Grid>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        startIcon={<SaveIcon />}
                        sx={{ textTransform: 'none', backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#45A049' } }}
                    >
                        Submit
                    </Button>
                </Box>

            </Paper>
        </Box>
    );
}