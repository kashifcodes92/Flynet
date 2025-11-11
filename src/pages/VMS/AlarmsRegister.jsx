// src/pages/VMS/AlarmsRegister.jsx (FINAL FIDELITY CODE)

import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, Tabs, Tab, Stack } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

// Helper component for tabs
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div hidden={value !== index} {...other}>
            {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
        </div>
    );
}

// Subcomponent for User/Camera Assignment (The dual-panel interface)
const AssignmentPanel = ({ title }) => {
    // Mock user data for selection panel
    const mockUsers = [
        { name: 'Administrator', email: 'alexgomez@flynet.sv' },
        { name: 'Jane Doe', email: 'jane@flynet.sv' },
    ];
    
    // This component renders the core User/Camera list selection seen in the Figma
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>{title}</Typography>
                <TextField placeholder="Search..." fullWidth size="small" sx={{ mb: 2 }} />
                <Paper variant="outlined" sx={{ p: 2, height: 200, overflowY: 'auto' }}>
                    {mockUsers.map((user, index) => (
                        <Stack key={index} direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                            <Box>
                                <Typography variant="body1">{user.name}</Typography>
                                <Typography variant="caption" color="textSecondary">{`<${user.email}>`}</Typography>
                            </Box>
                            <Button size="small" variant="text" color="primary">
                                +
                            </Button>
                        </Stack>
                    ))}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>Picks</Typography>
                <TextField placeholder="Search..." fullWidth size="small" sx={{ mb: 2 }} />
                <Paper variant="outlined" sx={{ p: 2, height: 200, overflowY: 'auto' }}>
                    <Typography variant="body2" color="textSecondary" sx={{ fontStyle: 'italic' }}>
                        No items selected
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};


export default function AlarmsRegister() {
    const [tab, setTab] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Alarm saved (Mock)");
    };

    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Alarms Register
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* Name and Description Inputs */}
                <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Name" fullWidth size="small" placeholder="Enter a name" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Description" fullWidth size="small" placeholder="Insert a description" />
                    </Grid>
                </Grid>

                {/* Tabs Navigation */}
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} aria-label="alarm settings tabs">
                        <Tab label="Users" />
                        <Tab label="Cameras" />
                    </Tabs>
                </Box>

                {/* Tab Content */}
                <TabPanel value={tab} index={0}>
                    <AssignmentPanel title="Users" />
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    <AssignmentPanel title="Cameras" />
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