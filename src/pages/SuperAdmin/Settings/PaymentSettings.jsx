// src/pages/SuperAdmin/Settings/PaymentSettings.jsx

import React from 'react';
import { Box, Grid, TextField, Checkbox, FormControlLabel, Typography, MenuItem, Divider, Switch, Stack, Link } from '@mui/material';

export default function PaymentSettings() {
    
    return (
        <Box component="form" noValidate>
            
            <Stack direction="row" spacing={4} alignItems="center" sx={{ mb: 4 }}>
                 <FormControlLabel 
                    control={<Switch defaultChecked />} 
                    label={<Typography variant="h6">Enable Offline Payment</Typography>} 
                />
                <Typography variant="subtitle2" color="textSecondary">
                    Offline payment details (e.g., bank account info)
                </Typography>
            </Stack>

            <Divider sx={{ mb: 4 }} />
            
            {/* --- Stripe Configuration --- */}
            <Typography variant="h6" gutterBottom>Stripe</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField label="Stripe Pub Key" fullWidth placeholder="Stripe Public Key" size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Stripe Secret Key" fullWidth placeholder="Stripe Secret Key" size="small" />
                </Grid>
            </Grid>
            
            <Divider sx={{ my: 4 }} />

            {/* --- Paypal Configuration --- */}
            <Typography variant="h6" gutterBottom>Paypal</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField label="Paypal client ID" fullWidth placeholder="Paypal app client id" size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Paypal app secret" fullWidth placeholder="Paypal app secret" size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel 
                        control={<Switch />} 
                        label={<Typography variant="body2">Sandbox Mode (Testing)</Typography>} 
                    />
                </Grid>
            </Grid>
            
            {/* PayPal Instructions Block (Based on PNGs) */}
            <Box sx={{ p: 2, backgroundColor: '#FFF3E0', borderLeft: '3px solid orange', mt: 2 }}>
                <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>IMPORTANT:</Typography>
                <Typography variant="body2">
                    Test mode bypasses live authentication. Sandbox is only for testing. After changes, you should provide live client id & app secret.
                </Typography>
                <Typography variant="body2" component="ul" sx={{ mt: 1, ml: 1, listStyleType: 'disc' }}>
                    <li>1. Login to Developer account.</li>
                    <li>2. Go to 'My Apps & Credentials'.</li>
                    <li>3. Click on the blue 'Create App' button.</li>
                    <li>4. Select App Type as 'Merchant'.</li>
                    <li>5. Copy the Client ID and Secret Key.</li>
                </Typography>
            </Box>


            <Divider sx={{ my: 4 }} />

            {/* --- Razorpay Configuration --- */}
            <Typography variant="h6" gutterBottom>Razorpay (For INR India)</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField label="Key ID" fullWidth placeholder="Key ID" size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label="Key Secret" fullWidth placeholder="Key Secret" size="small" />
                </Grid>
            </Grid>
            
            <Divider sx={{ my: 4 }} />

            {/* --- Other Gateways (Myfatoorah / Flutterwave) --- */}
            <Typography variant="h6" gutterBottom>Myfatoorah / Flutterwave</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField label="Public Key" fullWidth placeholder="Public Key" size="small" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField label="Secret key" fullWidth placeholder="Secret key" size="small" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField select label="Is Test?" fullWidth defaultValue={false} size="small">
                        <MenuItem value={true}>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                    </TextField>
                </Grid>
            </Grid>
            
            {/* Document Reference Block */}
            <Box sx={{ mt: 4, p: 2, border: '1px solid #EEE', borderRadius: 1, backgroundColor: '#FAFAFA' }}>
                <Typography variant="body2" color="textSecondary">
                    To know about setting the gateway, refer to user or the official documentation.
                </Typography>
                <Link href="#" variant="caption" display="block" sx={{ mt: 1 }}>
                    Click this link to check supported currencies for Flutterwave.
                </Link>
            </Box>
        </Box>
    );
}