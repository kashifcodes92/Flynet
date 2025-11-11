// src/pages/VMS/Profile.jsx (FINAL FIDELITY CODE)

import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, Divider, Stack, IconButton, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UploadIcon from '@mui/icons-material/Upload';
import LockIcon from '@mui/icons-material/Lock';
import InfoIcon from '@mui/icons-material/Info';

export default function Profile() {
    const [activeSection, setActiveSection] = useState('password'); // Default to Change Password section
    
    // Mock data for the profile section
    const profileData = {
        name: 'Super Admin',
        email: 'superadmin@example.com',
        prefix: 'Mr.',
        language: 'English'
    };

    const languages = ['English', 'Spanish', 'Portuguese'];

    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
                My Profile
            </Typography>

            <Paper elevation={0} sx={{ p: 4, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* --- Change Password Section --- */}
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    Change Password
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <TextField 
                            label="Current password" 
                            type="password" 
                            fullWidth 
                            size="small" 
                            placeholder="Current password"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField 
                            label="New password" 
                            type="password" 
                            fullWidth 
                            size="small" 
                            placeholder="New password"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField 
                            label="Confirm new password" 
                            type="password" 
                            fullWidth 
                            size="small" 
                            placeholder="Confirm new password"
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', mt: -2 }}>
                         <Button variant="contained" size="small" sx={{ textTransform: 'none', backgroundColor: '#1C2536' }}>
                            Update
                        </Button>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />
                
                {/* --- Edit Profile Section --- */}
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    Edit Profile
                </Typography>
                
                <Grid container spacing={3}>
                    {/* Left Side - Personal Info */}
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <TextField select label="Prefix" fullWidth size="small" defaultValue={profileData.prefix}>
                                    <MenuItem value="Mr.">Mr.</MenuItem>
                                    <MenuItem value="Mrs.">Mrs.</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField label="First Name" fullWidth size="small" defaultValue="Super" />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField label="Last Name" fullWidth size="small" defaultValue="Admin" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Email" fullWidth size="small" defaultValue={profileData.email} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField select label="Language" fullWidth size="small" defaultValue={profileData.language}>
                                    {languages.map(lang => <MenuItem key={lang} value={lang}>{lang}</MenuItem>)}
                                </TextField>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    {/* Right Side - Profile Photo */}
                    <Grid item xs={12} md={4}>
                        <Paper variant="outlined" sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <AccountCircleIcon sx={{ fontSize: 80, color: '#1C2536', mb: 1 }} />
                            <Typography variant="body2" fontWeight="bold" sx={{ mb: 1 }}>Profile Photo</Typography>
                            
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Button variant="outlined" component="label" startIcon={<UploadIcon />} size="small" sx={{ textTransform: 'none' }}>
                                    Choose File
                                    <input type="file" hidden />
                                </Button>
                                <Typography variant="caption" color="textSecondary">Max File size: 5MB</Typography>
                            </Stack>
                            <Button variant="contained" size="small" sx={{ mt: 2, textTransform: 'none', backgroundColor: '#1C2536' }}>
                                Update
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
                
                
            </Paper>
        </Box>
    );
}