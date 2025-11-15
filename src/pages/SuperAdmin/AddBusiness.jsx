// src/pages/SuperAdmin/AddBusiness.jsx (FINAL FIDELITY CODE)

import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Paper, Grid, Divider, Stack, MenuItem } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import UploadIcon from '@mui/icons-material/Upload';
import LockIcon from '@mui/icons-material/Lock'; // For password fields

export default function AddBusiness() {
    const [formData, setFormData] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would call createBusiness(formData) API service
        console.log("Submitting new business data:", formData);
        alert("New Business data submitted (Mock)");
    };
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Mock data options
    const currencyOptions = ['USD', 'EUR', 'PKR'];
    const timezoneOptions = ['Asia/Karachi', 'Asia/Kolkata', 'America/New_York'];
    const packageOptions = ['Starter - Free', 'Regular', 'Unlimited'];
    const paidViaOptions = ['Cash', 'Stripe', 'Paypal'];

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Add New Businesses
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                Onboard a new tenant and configure their access details
            </Typography>

            <Paper elevation={0} sx={{ p: 4, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* --- 1. Business Details Section --- */}
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
                    Business details
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField required label="Business Name*" name="businessName" fullWidth size="small" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required label="Start Date*" type="date" name="startDate" InputLabelProps={{ shrink: true }} fullWidth size="small" onChange={handleChange} />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <TextField select required label="Currency*" name="currency" fullWidth size="small" defaultValue="USD" onChange={handleChange}>
                            {currencyOptions.map(code => <MenuItem key={code} value={code}>{code}</MenuItem>)}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Website" name="website" fullWidth size="small" onChange={handleChange} />
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
                        <TextField label="Business contact number" name="contactNumber" fullWidth size="small" onChange={handleChange} />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <TextField select required label="Time zone*" name="timezone" fullWidth size="small" defaultValue="Asia/Kolkata" onChange={handleChange}>
                            {timezoneOptions.map(zone => <MenuItem key={zone} value={zone}>{zone}</MenuItem>)}
                        </TextField>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                {/* --- 2. Owner Information Section --- */}
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
                    Owner information
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <TextField select required label="Prefix" name="prefix" fullWidth size="small" defaultValue="Mr." onChange={handleChange}>
                            <MenuItem value="Mr.">Mr. / Mrs / Miss</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField required label="First Name*" name="firstName" fullWidth size="small" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField required label="Last Name*" name="lastName" fullWidth size="small" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField required label="Username*" name="username" fullWidth size="small" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField required label="Email*" type="email" name="email" fullWidth size="small" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField required label="Password*" type="password" name="password" fullWidth size="small" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField required label="Confirm Password*" type="password" name="confirmPassword" fullWidth size="small" onChange={handleChange} />
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                {/* --- 3. Package & Payment Section --- */}
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
                    Package Assignment
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <TextField select label="Packages" name="packages" fullWidth size="small" defaultValue="Regular" onChange={handleChange}>
                            {packageOptions.map(pkg => <MenuItem key={pkg} value={pkg}>{pkg}</MenuItem>)}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField select label="Paid Via" name="paidVia" fullWidth size="small" defaultValue="Cash" onChange={handleChange}>
                            {paidViaOptions.map(via => <MenuItem key={via} value={via}>{via}</MenuItem>)}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField label="Payment Transaction ID" name="transactionId" fullWidth size="small" />
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