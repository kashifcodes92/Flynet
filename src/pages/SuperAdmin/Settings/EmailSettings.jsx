// src/pages/SuperAdmin/Settings/EmailSettings.jsx

import React from 'react';
import { Box, Grid, TextField, Checkbox, FormControlLabel, Typography, MenuItem, Divider } from '@mui/material';

export default function EmailSettings() {
    
    // Mock data for dropdowns
    const mailDrivers = ['SMTP', 'Sendmail', 'Mailgun'];

    return (
        <Box component="form" noValidate>
            <Typography variant="h6" gutterBottom>SMTP Configuration</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField select label="Mail Driver" fullWidth defaultValue="SMTP" size="small">
                        {mailDrivers.map((driver) => (
                            <MenuItem key={driver} value={driver}>
                                {driver}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Host" fullWidth size="small" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Port" fullWidth size="small" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Username" fullWidth size="small" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Password" type="password" fullWidth size="small" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Encryption" fullWidth defaultValue="tls / ssl" size="small" />
                </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>Sender Details</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField label="From Address" fullWidth size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="From Name" fullWidth size="small" />
                </Grid>
            </Grid>
            
            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" gutterBottom>Automation & Permissions</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel 
                        control={<Checkbox />} 
                        label={<Typography variant="body2">Allow businesses to use Superadmin email configuration</Typography>} 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel 
                        control={<Checkbox defaultChecked />} 
                        label={<Typography variant="body2">Enable new business registration email</Typography>} 
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControlLabel 
                        control={<Checkbox defaultChecked />} 
                        label={<Typography variant="body2">Enable new subscription email</Typography>} 
                    />
                </Grid>
            </Grid>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>Welcome Email Template</Typography>
            <FormControlLabel 
                control={<Checkbox defaultChecked />} 
                label={<Typography variant="body2">Enable welcome email to new business</Typography>} 
            />
            <Typography variant="caption" color="textSecondary" display="block" sx={{ ml: 4, mb: 1 }}>
                Available Tags: [business_name], [owner_name]
            </Typography>
            <TextField label="Welcome email subject" fullWidth size="small" sx={{ mb: 2 }}/>
            <TextField 
                label="Welcome email content (HTML/Text)" 
                fullWidth 
                multiline 
                rows={4} 
                defaultValue="Dear [owner_name], Welcome to [business_name]!"
            />

        </Box>
    );
}