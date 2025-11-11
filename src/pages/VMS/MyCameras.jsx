// src/pages/VMS/MyCameras.jsx

import React, { useState } from 'react';
import { Box, Grid, Typography, Paper, TextField, InputAdornment, Stack, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

// Mock data for camera tiles
const mockCameras = [
    { id: 1, name: 'Flynet Security CAM 1.03 street...', status: 'Live', thumbnail: 'URL_TO_FEED_1' },
    { id: 2, name: 'Flynet Security CAM 2.01 rear...', status: 'Live', thumbnail: 'URL_TO_FEED_2' },
    { id: 3, name: 'Warehouse Entrance CAM 3.0', status: 'Offline', thumbnail: 'URL_TO_FEED_3' },
];

export default function MyCameras() {
    const [search, setSearch] = useState('');
    
    // Helper component to simulate a camera live feed tile
    const CameraTile = ({ camera }) => (
        <Paper elevation={1} sx={{ p: 1, mb: 1, cursor: 'pointer', border: '1px solid #EEE' }}>
            <img 
                src="https://via.placeholder.com/150x100?text=LIVE+FEED" // Placeholder image
                alt={camera.name} 
                style={{ width: '100%', height: 'auto', display: 'block', marginBottom: '8px' }} 
            />
            <Typography variant="body2" fontWeight="bold" noWrap>{camera.name}</Typography>
            <Typography variant="caption" color="textSecondary">{camera.status}</Typography>
        </Paper>
    );

    return (
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
            
            {/* Left Column: Map and Main View */}
            <Box sx={{ flexGrow: 1, pr: 3 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    My Cameras
                </Typography>
                <Paper elevation={1} sx={{ height: 'calc(100vh - 200px)', borderRadius: 2, position: 'relative', overflow: 'hidden' }}>
                    
                    {/* Map Placeholder */}
                    <Box sx={{ 
                        backgroundColor: '#E0E0E0', 
                        height: '100%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                    }}>
                        <Typography variant="h6" color="textSecondary">
                            Interactive Map View
                        </Typography>
                    </Box>

                    {/* Map Controls (Zoom/Layer buttons from design) */}
                    <Stack 
                        direction="column" 
                        spacing={0.5} 
                        sx={{ position: 'absolute', top: 16, left: 16, backgroundColor: 'white', borderRadius: 1, boxShadow: 3 }}
                    >
                        <IconButton size="small"><ZoomInIcon /></IconButton>
                        <IconButton size="small"><ZoomOutIcon /></IconButton>
                    </Stack>
                </Paper>
            </Box>

            {/* Right Column: Camera List Slider */}
            <Box sx={{ width: 300, pl: 2, borderLeft: '1px solid #EEE' }}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
                    {mockCameras.length} Cameras
                </Typography>
                <TextField 
                    size="small" 
                    placeholder="Search cameras..."
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{ mb: 2 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                
                {/* Camera List */}
                <Box sx={{ maxHeight: 'calc(100vh - 270px)', overflowY: 'auto' }}>
                    {mockCameras.map((camera) => (
                        <CameraTile key={camera.id} camera={camera} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}