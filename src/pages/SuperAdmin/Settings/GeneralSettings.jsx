// src/pages/SuperAdmin/Settings/GeneralSettings.jsx

import React from 'react';
import { Box, Grid, TextField, Checkbox, FormControlLabel, Typography, MenuItem } from '@mui/material';

export default function GeneralSettings() {
    // Mock data for dropdowns
    const currencies = [{ code: 'USD', name: 'America - Dollar(USD)' }];
    
    return (
        <Box component="form" noValidate>
            <Typography variant="h6" gutterBottom>General Information</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField label="Business Name" fullWidth defaultValue="Flynet" size="small" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Email" fullWidth defaultValue="flynetABC@gmail.com" size="small" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField select label="Currency" fullWidth defaultValue="USD" size="small">
                        {currencies.map((option) => (
                            <MenuItem key={option.code} value={option.code}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                
                {/* --- Address Fields --- */}
                <Grid item xs={12} sm={4}>
                    <TextField label="Landmark" fullWidth defaultValue="Linking Street" size="small" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Zip Code" fullWidth defaultValue="85001" size="small" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="State" fullWidth defaultValue="Arizona" size="small" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="City" fullWidth defaultValue="Phoenix" size="small" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Country" fullWidth defaultValue="USA" size="small" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Min days for subscription expiry alert" fullWidth defaultValue="5" size="small" />
                </Grid>
            </Grid>

            <Box sx={{ mt: 4 }}>
                <FormControlLabel 
                    control={<Checkbox defaultChecked />} 
                    label={
                        <Typography variant="body2">
                            Enable business based username
                        </Typography>
                    } 
                />
                <Typography variant="caption" display="block" color="textSecondary" sx={{ ml: 4 }}>
                    If enabled business ID will be suffixed to username. This will only be applied to newly created users &amp; not existing users.
                </Typography>
            </Box>
        </Box>
    );
}