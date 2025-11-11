// src/pages/VMS/MyVideos.jsx

import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, TextField, InputAdornment, Button, Stack, Divider, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ShareIcon from '@mui/icons-material/Share';

// Mock data for video clips
const mockVideos = [
    { id: 1, camera: 'CAM 04: POS 33.8.69', date: 'Oct 23, 2025', duration: '05:36', description: 'Person Detected' },
    { id: 2, camera: 'CAM 02: Parking Lot', date: 'Oct 23, 2025', duration: '01:12', description: 'Vehicle Movement' },
    { id: 3, camera: 'CAM 01: Warehouse Rear', date: 'Oct 22, 2025', duration: '00:45', description: 'Activity Alert' },
];

const VideoClipTile = ({ video }) => (
    <Paper elevation={1} sx={{ p: 1, mb: 2, cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%', border: '1px solid #EEE' }}>
        <img 
            src="https://via.placeholder.com/200x120?text=CLIP"
            alt={video.description} 
            style={{ width: '100%', height: 'auto', display: 'block', marginBottom: '8px' }} 
        />
        <Typography variant="body2" fontWeight="bold" noWrap>{video.camera}</Typography>
        <Typography variant="caption" color="textSecondary">{video.date} ({video.duration})</Typography>
    </Paper>
);


export default function MyVideos() {
    const [search, setSearch] = useState('');
    const theme = useTheme();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                My Videos
            </Typography>
            
            <Grid container spacing={3}>
                
                {/* Left Column: Main Video Player and Timeline */}
                <Grid item xs={12} md={8}>
                    <Paper elevation={2} sx={{ mb: 2, height: 450, backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h6" color="white">Video Playback Area</Typography>
                    </Paper>

                    {/* Controls and Timeline */}
                    <Box sx={{ p: 2, border: '1px solid #E0E0E0', borderRadius: 1, backgroundColor: 'white' }}>
                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                            {['24 Hours', '6 Hours', '1 Hour', '5 Minutes'].map(label => (
                                <Button key={label} variant="outlined" size="small" sx={{ textTransform: 'none' }}>{label}</Button>
                            ))}
                        </Stack>
                        
                        {/* Mock Timeline Bar */}
                        <Box sx={{ height: 10, backgroundColor: '#EEE', borderRadius: 5, mb: 2 }} />

                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                            <Button variant="contained" startIcon={<ShareIcon />} size="small" sx={{ textTransform: 'none' }}>Share</Button>
                            <Button variant="contained" startIcon={<CloudDownloadIcon />} color="secondary" size="small" sx={{ textTransform: 'none' }}>Download</Button>
                        </Stack>
                    </Box>
                </Grid>

                {/* Right Column: Video Clip List */}
                <Grid item xs={12} md={4}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6" fontWeight="bold">{mockVideos.length} Videos</Typography>
                        <TextField 
                            size="small" 
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            InputProps={{
                                startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>),
                            }}
                        />
                    </Stack>
                    <Divider sx={{ my: 1 }} />
                    <Box sx={{ maxHeight: 600, overflowY: 'auto' }}>
                        {mockVideos.map((video) => (
                            <VideoClipTile key={video.id} video={video} />
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}