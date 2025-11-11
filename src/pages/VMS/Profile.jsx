// src/pages/VMS/Profile.jsx (Final VMS Profile Fidelity)

import React from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, Divider, Stack, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WarningIcon from '@mui/icons-material/Warning';
import UploadIcon from '@mui/icons-material/Upload';
import LockIcon from '@mui/icons-material/Lock';

export default function Profile() {
    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                My Profile
            </Typography>

            <Paper elevation={0} sx={{ p: 4, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                <Grid container spacing={4}>
                    
                    {/* Left Column: Fixed Profile Summary (Matching Figma) */}
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ p: 3, backgroundColor: '#F0F4F8', border: '1px solid #DDD' }}>
                            <Stack spacing={1} alignItems="center" sx={{ mb: 3 }}>
                                <AccountCircleIcon sx={{ fontSize: 70, color: '#1C2536' }} />
                                <Typography variant="h6" fontWeight="bold">FULL DEMO</Typography>
                                <Typography variant="body2" color="textSecondary">test@gmail.com</Typography>
                                <Typography variant="caption" color="textSecondary">FLYNET</Typography>
                            </Stack>
                            
                            <Divider sx={{ mb: 2 }} />

                            {/* Verification Alert Box (Matching Figma design) */}
                            <Box sx={{ p: 2, backgroundColor: '#FFD700', borderLeft: '4px solid orange', borderRadius: 1 }}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <WarningIcon color="error" />
                                    <Typography variant="body2" fontWeight="bold">
                                        Check your email to verify your account.
                                    </Typography>
                                </Stack>
                                <Button variant="contained" size="small" sx={{ mt: 1, textTransform: 'none', backgroundColor: 'orange', color: 'white' }}>
                                    Send verification email
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Right Column: Profile Edit Form */}
                    <Grid item xs={12} md={8}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>Settings</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Name" fullWidth defaultValue="DEMO FULL" size="small" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Email" fullWidth defaultValue="test@gmail.com" size="small" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Password" type="password" fullWidth size="small" placeholder="Password" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Confirm Password" type="password" fullWidth size="small" placeholder="Confirm password" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>Profile Photo</Typography>
                                <Button variant="outlined" component="label" startIcon={<UploadIcon />} size="small">
                                    Upload Image (Max 5MB)
                                    <input type="file" hidden />
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" startIcon={<LockIcon />} sx={{ textTransform: 'none', backgroundColor: '#1C2536' }}>
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}