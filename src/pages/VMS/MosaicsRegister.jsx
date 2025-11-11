// src/pages/VMS/MosaicsRegister.jsx (FINAL FIDELITY CODE)

import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, Tabs, Tab, Stack, Switch, FormControlLabel, MenuItem } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import MonitorIcon from '@mui/icons-material/Monitor'; // Desktop icon
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'; // Mobile icon

// Helper component for tabs
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div hidden={value !== index} {...other}>
            {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
        </div>
    );
}

export default function MosaicsRegister() {
    const [tab, setTab] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mosaic saved (Mock)");
    };

    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Mosaics Register
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* Tabs Navigation */}
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                    <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} aria-label="mosaic settings tabs">
                        <Tab label="Basic data" />
                        {/* Other tabs like Cameras and Permissions would go here */}
                    </Tabs>
                </Box>

                {/* Tab Panel Content: Basic Data */}
                <TabPanel value={tab} index={0}>
                    <Box component="form" onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Name" fullWidth size="small" placeholder="Enter a name" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField select label="Type" fullWidth size="small" defaultValue="Cameras">
                                    <MenuItem value="Cameras">Cameras</MenuItem>
                                    <MenuItem value="LPR">LPR</MenuItem>
                                </TextField>
                            </Grid>
                            
                            <Grid item xs={12} sm={6}>
                                <TextField select label="Number of cameras" fullWidth size="small" defaultValue="1 Camera">
                                    <MenuItem value="1 Camera">1 Camera</MenuItem>
                                    <MenuItem value="4 Cameras">4 Cameras</MenuItem>
                                    <MenuItem value="9 Cameras">9 Cameras</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel control={<Switch defaultChecked />} label="Active" sx={{ mt: 1 }} />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>Available in</Typography>
                                <Stack direction="row" spacing={3}>
                                    <MonitorIcon fontSize="large" color="primary" />
                                    <PhoneIphoneIcon fontSize="large" color="action" />
                                </Stack>
                            </Grid>
                        </Grid>

                        <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 4 }}>
                            <Button variant="contained" color="error" startIcon={<CloseIcon />}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" startIcon={<SaveIcon />} color="primary" sx={{ textTransform: 'none', backgroundColor: '#1C2536' }}>
                                Save
                            </Button>
                        </Stack>
                    </Box>
                </TabPanel>
            </Paper>
        </Box>
    );
}