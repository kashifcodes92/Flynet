// src/pages/VMS/CamerasRegister.jsx

import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, MenuItem, Tabs, Tab } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

// Helper for tabs (only one tab visible in the design)
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div hidden={value !== index} {...other}>
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

export default function CamerasRegister() {
    const [tab, setTab] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Camera registered (Mock)");
    };

    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Cameras Register
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)}>
                    <Tab label="Basic data" />
                    {/* Other potential tabs: Location, Settings, etc. */}
                </Tabs>

                <TabPanel value={tab} index={0}>
                    <Box component="form" onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField label="User" fullWidth size="small" placeholder="Enter a name." />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField select label="Manufacturer/Plantilla" fullWidth size="small" defaultValue="RTSP Generic">
                                    <MenuItem value="RTSP Generic">RTSP Generic</MenuItem>
                                    <MenuItem value="Hikvision">Hikvision</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField select label="Protocol" fullWidth size="small" defaultValue="RTSP">
                                    <MenuItem value="RTSP">RTSP</MenuItem>
                                    <MenuItem value="RTMP">RTMP</MenuItem>
                                    <MenuItem value="HTTP">HTTP</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Server" fullWidth size="small" placeholder="Select Server" />
                            </Grid>
                        </Grid>

                        <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 4 }}>
                            <Button variant="outlined" color="error">
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