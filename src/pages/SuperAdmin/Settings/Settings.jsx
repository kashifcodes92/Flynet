// src/pages/SuperAdmin/Settings/Settings.jsx

import React, { useState } from 'react';
import { Box, Typography, Paper, Tabs, Tab, Button, Stack, Divider, Grid } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

// Import all required tab components
import GeneralSettings from './GeneralSettings.jsx';
import EmailSettings from './EmailSettings.jsx';
import PaymentSettings from './PaymentSettings.jsx';


// Array of tabs based on the design
const settingTabs = [
    { label: 'Super Admin Settings', component: GeneralSettings, value: 0 },
    { label: 'Email/SMTP Settings', component: EmailSettings, value: 1 },
    { label: 'Payment Gateway', component: PaymentSettings, value: 2 },
];

// Helper component to render the currently selected tab content
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`setting-tabpanel-${index}`}
      aria-labelledby={`setting-tab-${index}`}
      style={{ width: '100%' }} // Ensure the panel takes full width
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Settings() {
    const [currentTab, setCurrentTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Super Admin Settings
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                Edit settings for the entire platform
            </Typography>
            
            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* Save Button for high fidelity (placed at top right) */}
                <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2, pr: 2 }}>
                    <Button variant="contained" startIcon={<SaveIcon />} sx={{ textTransform: 'none', backgroundColor: '#1C2536' }}>
                        Update
                    </Button>
                </Stack>
                
                <Divider sx={{ mb: 3 }} />

                <Grid container>
                    {/* Left Column: Vertical Tabs Navigation */}
                    <Grid item xs={12} sm={3} md={2}>
                        <Tabs 
                            orientation="vertical"
                            variant="scrollable"
                            value={currentTab} 
                            onChange={handleTabChange} 
                            aria-label="Super Admin settings tabs"
                            sx={{ borderRight: 1, borderColor: 'divider', minWidth: '100%', height: '100%' }}
                        >
                            {settingTabs.map((tab) => (
                                <Tab 
                                    key={tab.value} 
                                    label={tab.label} 
                                    id={`setting-tab-${tab.value}`}
                                    aria-controls={`setting-tabpanel-${tab.value}`}
                                    sx={{ textTransform: 'none', alignItems: 'flex-start' }}
                                />
                            ))}
                        </Tabs>
                    </Grid>

                    {/* Right Column: Tab Content Area */}
                    <Grid item xs={12} sm={9} md={10}>
                        <Box sx={{ pl: { sm: 4 } }}>
                            {settingTabs.map((tab) => (
                                <TabPanel key={tab.value} value={currentTab} index={tab.value}>
                                    <tab.component />
                                </TabPanel>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}