// src/pages/VMS/PatrolsRegister.jsx (FINAL FIDELITY CODE)

import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, Tabs, Tab, Stack, Switch, FormControlLabel, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AddIcon from '@mui/icons-material/Add';

// Helper component for tabs
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div hidden={value !== index} {...other}>
            {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
        </div>
    );
}

// Subcomponent for User Assignment (The dual-panel interface)
const UserAssignmentPanel = () => {
    // Mock user data for selection panel (Matches the structure in the Register PNG)
    const mockUsers = [
        { name: 'Administrator', email: 'alexgomez@flynet.sv' },
        { name: 'Victor Hernandez', email: 'victor@flynet.sv' },
        { name: 'Edwin Palacios', email: 'edwinlino@flynet.sv' },
        { name: 'Zayra Gomez', email: 'zayra@flynet.sv' },
    ];
    
    return (
        <Grid container spacing={4} alignItems="center">
            {/* Left Panel: Available Users */}
            <Grid item xs={12} md={5}>
                <Typography variant="h6" gutterBottom>Users</Typography>
                <TextField placeholder="Search..." fullWidth size="small" sx={{ mb: 2 }} />
                <Paper variant="outlined" sx={{ p: 2, height: 250, overflowY: 'auto' }}>
                    {mockUsers.map((user, index) => (
                        <Stack key={index} direction="row" justifyContent="space-between" alignItems="center" sx={{ borderBottom: '1px dashed #EEE', py: 0.5 }}>
                            <Box>
                                <Typography variant="body1">{user.name}</Typography>
                                <Typography variant="caption" color="textSecondary">{`<${user.email}>`}</Typography>
                            </Box>
                            <IconButton size="small" color="primary">
                                <AddIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    ))}
                </Paper>
            </Grid>
            
            {/* Center Buttons: Move All Left/Right */}
            <Grid item xs={12} md={2} sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
                <IconButton color="secondary" size="small"><ArrowForwardIosIcon /></IconButton>
                <IconButton color="secondary" size="small"><ArrowBackIosIcon /></IconButton>
            </Grid>

            {/* Right Panel: Picks (Assigned Users) */}
            <Grid item xs={12} md={5}>
                <Typography variant="h6" gutterBottom>Picks</Typography>
                <TextField placeholder="Search..." fullWidth size="small" sx={{ mb: 2 }} />
                <Paper variant="outlined" sx={{ p: 2, height: 250, overflowY: 'auto' }}>
                    <Typography variant="body2" color="textSecondary" sx={{ fontStyle: 'italic' }}>
                        No users assigned
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};


export default function PatrolsRegister() {
    const [tab, setTab] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Patrol saved (Mock)");
    };

    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Patrols Register
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* Global Toggles */}
                <Grid container spacing={3} alignItems="center" sx={{ mb: 3 }}>
                    <Grid item xs={12} sm={6}>
                        <TextField required label="Name" fullWidth size="small" placeholder="Enter a name" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <TextField required label="Patrol time" fullWidth size="small" defaultValue={30} helperText="Seconds" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <FormControlLabel control={<Switch defaultChecked />} label="Active" sx={{ mt: 1 }} />
                    </Grid>
                </Grid>

                {/* Tabs Navigation */}
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} aria-label="patrol settings tabs">
                        <Tab label="Users" />
                        <Tab label="Mosaics" />
                    </Tabs>
                </Box>

                {/* Tab Panel Content */}
                <TabPanel value={tab} index={0}>
                    <UserAssignmentPanel />
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    <Typography variant="body1" color="textSecondary">Assign Mosaics/Camera Layouts to this patrol here.</Typography>
                </TabPanel>
                
                {/* Form Actions */}
                <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 4 }}>
                    <Button variant="contained" color="error" startIcon={<CloseIcon />}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" startIcon={<SaveIcon />} color="primary" sx={{ textTransform: 'none', backgroundColor: '#1C2536' }}>
                        Save
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
}