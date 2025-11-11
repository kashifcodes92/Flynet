// src/pages/VMS/MyMosaics.jsx

import React from 'react';
import { Box, Typography, Paper, Grid, Stack, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';

// Mock Mosaic Data
const mockMosaics = [
    { id: 1, name: '4-Way Entry View', layout: '2x2', cameras: 4 },
    { id: 2, name: 'Main Lobby', layout: '1x2', cameras: 2 },
];

const MosaicTile = ({ mosaic }) => (
    <Paper elevation={1} sx={{ p: 2, textAlign: 'center', height: 150, display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid #EEE' }}>
        <VisibilityIcon sx={{ fontSize: 36, color: '#999', mb: 1 }} />
        <Typography variant="h6" fontWeight="bold">{mosaic.name}</Typography>
        <Typography variant="body2" color="textSecondary">{mosaic.layout} Grid</Typography>
        <Typography variant="caption" color="primary">({mosaic.cameras} Cameras)</Typography>
    </Paper>
);

export default function MyMosaics() {
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    My Mosaics
                </Typography>
                <Button variant="contained" color="secondary" startIcon={<AddIcon />} sx={{ textTransform: 'none' }}>
                    + Create New Mosaic
                </Button>
            </Stack>

            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                Manage your custom multi-camera grid views
            </Typography>

            <Grid container spacing={3}>
                {mockMosaics.map((mosaic) => (
                    <Grid item xs={12} sm={6} md={3} key={mosaic.id}>
                        <MosaicTile mosaic={mosaic} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}