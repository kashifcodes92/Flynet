// src/pages/VMS/Platform.jsx

import React, { useState } from 'react';
import { Box, Typography, Paper, Tabs, Tab, Grid, TextField, Button, Stack, Switch, FormControlLabel } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

// We assume these subcomponents (Settings, Colors, etc.) exist in a feature/vms-settings folder
const PlaceholderTab = ({ name }) => (
    <Box sx={{ p: 3, border: '1px solid #EEE', textAlign: 'center' }}>
        <Typography variant="h6" color="textSecondary">{name} Configuration Placeholder</Typography>
    </Box>
);

// Tab structure defined by the VMS panel design
const vmsSettingsTabs = [
    { label: 'Settings', value: 0 },
    { label: 'Colors', value: 1 },
    { label: 'Images', value: 2 },
    { label: 'Terms and conditions', value: 3 },
];

export default function Platform() {
    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    const renderTabContent = (tabIndex) => {
        switch (tabIndex) {
            case 0: return <Typography>General Site Settings here...</Typography>;
            case 1: return <Typography>Color configuration for this site...</Typography>;
            case 2: return <Typography>Logo and image replacement for this site...</Typography>;
            case 3: return <Typography>Terms and Conditions editor...</Typography>;
            default: return null;
        }
    };

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    Platform Settings
                </Typography>
                <Button variant="contained" startIcon={<SaveIcon />} sx={{ textTransform: 'none', backgroundColor: '#1C2536' }}>
                    Save Changes
                </Button>
            </Stack>
            
            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                    <Tabs value={currentTab} onChange={handleTabChange} aria-label="VMS Platform settings tabs">
                        {vmsSettingsTabs.map((tab) => (
                            <Tab key={tab.value} label={tab.label} />
                        ))}
                    </Tabs>
                </Box>
                
                {/* Content Area */}
                <Box>
                    {renderTabContent(currentTab)}
                </Box>
            </Paper>
        </Box>
    );
}