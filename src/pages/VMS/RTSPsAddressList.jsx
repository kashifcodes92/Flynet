// src/pages/VMS/RTSPsAddressList.jsx (FINAL AND COMPLETE CODE)

import React from 'react';
import { Box, Typography, Paper, Grid, TextField, Button, Divider, Link, Stack, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function RTSPsAddressList() {
    // Mock data for the URL components
    const urlComponents = {
        user: 'Ex: admin',
        password: 'Ex: 1234',
        domain: 'Ex: my-camera.ddns.com.br or 123.456.78.9',
        port: 'RTSP port configured on the camera (default port is 554 on most cameras)',
        manufacturer: 'Filter the camera manufacturer\'s name.',
    };
    
    // Mock URL to be generated/copied
    const generatedUrl = 'rtsp://[USER]:[PASSWORD]@[DOMAIN]:[PORT]/[profiles]';

    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                RTSPs Address List
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                Check below for a list of the most popular RTSP addresses on the market.
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 3 }}>
                    Fill in the fields and then copy the link, according to the manufacturer's brand. Use it when registering a new camera on the platform.
                </Typography>

                <Grid container spacing={3}>
                    {Object.entries(urlComponents).map(([key, helperText]) => (
                        <Grid item xs={12} sm={6} key={key}>
                            <TextField 
                                label={key.charAt(0).toUpperCase() + key.slice(1)} 
                                fullWidth 
                                size="small" 
                                helperText={helperText}
                            />
                        </Grid>
                    ))}
                </Grid>
                
                <Divider sx={{ my: 4 }} />

                <Typography variant="h6" gutterBottom>Generated URL</Typography>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 2, border: '1px solid #CCC', borderRadius: 1 }}>
                    <Typography>{generatedUrl}</Typography>
                    <IconButton size="small" color="primary">
                        <ContentCopyIcon />
                    </IconButton>
                </Stack>
                
                <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>Manufacturer Templates</Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>Tenda</Typography>
                <Link href="#" variant="body2" sx={{ ml: 2, display: 'block' }}>
                    rtsp://[USER]:[PASSWORD]@[DOMAIN]:[PORT]/profile1
                </Link>
                
            </Paper>
        </Box>
    );
}