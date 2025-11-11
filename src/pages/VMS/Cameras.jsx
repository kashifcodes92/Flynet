// src/pages/VMS/Cameras.jsx (Final VMS Cameras Fidelity)

import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, TextField, InputAdornment, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Chip, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WifiIcon from '@mui/icons-material/Wifi';
import CancelIcon from '@mui/icons-material/Cancel';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

// Mock Data for Status and Table
const mockCameraStatus = [
    { label: 'Enabled', count: 203, icon: CheckCircleIcon, color: 'success' },
    { label: 'Disabled', count: 0, icon: CancelIcon, color: 'error' },
    { label: 'Online', count: 170, icon: WifiIcon, color: 'info' },
    { label: 'Offline', count: 30, icon: WifiOffIcon, color: 'error' },
    { label: 'Unstable', count: 1, icon: SwapCallsIcon, color: 'warning' },
];

const mockCameraList = [
    { id: 1, name: 'Leonel Antonio Lizama Nolasco', type: 'PPA', analytical: 'x', host: '7 days', storage: '47 GB', resolution: '1280 x 720', status: 'Active' },
    { id: 2, name: 'Another Camera Feed', type: 'IP', analytical: '✓', host: '30 days', storage: '20 GB', resolution: '1920 x 1080', status: 'Active' },
    { id: 3, name: 'Warehouse Entry', type: 'CCTV', analytical: 'x', host: '1 day', storage: '5 GB', resolution: '640 x 480', status: 'Inactive' },
];

// Helper Component for Status Cards (Fidelity to Cameras PNG)
const StatusCard = ({ label, count, icon: Icon, color }) => (
    <Paper elevation={0} sx={{ 
        p: 2, 
        textAlign: 'center', 
        border: '1px solid #E0E0E0', 
        borderRadius: 1, 
        backgroundColor: 'white',
        minHeight: 100 // Ensure size consistency
    }}>
        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
            <Icon sx={{ fontSize: 30, color: `${color}.main` }} />
            <Box>
                <Typography variant="h5" fontWeight="bold" color="text.primary">{count}</Typography>
                <Typography variant="body2" color="text.secondary">{label}</Typography>
            </Box>
        </Stack>
    </Paper>
);

export default function Cameras() {
    const navigate = useNavigate();

    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Cameras
            </Typography>

            {/* Status Metrics Row */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
                {mockCameraStatus.map((status) => (
                    <Grid item xs={12} sm={6} md={2.4} key={status.label}>
                        <StatusCard {...status} />
                    </Grid>
                ))}
            </Grid>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* Toolbar: Add, Search, Filters */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Stack direction="row" spacing={1}>
                        <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={() => navigate('/vms-client/cameras/register')} sx={{ textTransform: 'none' }}>
                            + Add
                        </Button>
                        <TextField size="small" placeholder="Column" sx={{ width: 120 }} />
                        <Button variant="outlined" sx={{ textTransform: 'none' }}>Order</Button>
                    </Stack>
                    
                    <TextField 
                        size="small" 
                        placeholder="Search"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                {/* Cameras List Table */}
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Analytical</TableCell>
                            <TableCell>Host</TableCell>
                            <TableCell>Storage</TableCell>
                            <TableCell>Resolution</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockCameraList.map((camera) => (
                            <TableRow key={camera.id}>
                                <TableCell><Typography variant="body2">{camera.name}</Typography></TableCell>
                                <TableCell><Chip label={camera.type} size="small" /></TableCell>
                                <TableCell><Typography color={camera.analytical === 'x' ? 'error.main' : 'success.main'}>{camera.analytical}</Typography></TableCell>
                                <TableCell>{camera.host}</TableCell>
                                <TableCell>{camera.storage}</TableCell>
                                <TableCell><Chip label={camera.resolution} size="small" /></TableCell>
                                <TableCell><CheckCircleIcon color="success" fontSize="small" /></TableCell>
                                <TableCell align="center">
                                    <Stack direction="row" spacing={1} justifyContent="center">
                                        <IconButton size="small"><SettingsIcon /></IconButton>
                                        <IconButton size="small" color="error"><DeleteIcon /></IconButton>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
                {/* Pagination Placeholder */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Typography variant="caption">Displaying 1 to {mockCameraList.length} of 100 results</Typography>
                </Box>
            </Paper>
        </Box>
    );
}