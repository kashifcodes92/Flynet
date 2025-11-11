// src/pages/VMS/Patrols.jsx (FINAL FIDELITY CODE)

import React from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Stack, Chip, TextField, InputAdornment } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SearchIcon from '@mui/icons-material/Search';

// Mock Patrol Data (Master Patrols List)
const mockPatrols = [
    { id: 1, name: 'Warehouse Sweep Night', interval: '30 Seconds', status: 'Active', cameras: 3, users: 4, mosaics: 14 },
    { id: 2, name: 'Perimeter Check Day', interval: '30 Seconds', status: 'Inactive', cameras: 5, users: 4, mosaics: 10 },
];

export default function Patrols() {
    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Patrols
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* Toolbar: Add Button and Search Bar (Matching Figma) */}
                <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        startIcon={<AddIcon />} 
                        onClick={() => console.log('Navigate to Patrols Register')}
                        sx={{ textTransform: 'none' }}
                    >
                        + Add
                    </Button>
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
                </Stack>

                {/* Patrols Table */}
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Users</TableCell>
                            <TableCell>Mosaics</TableCell>
                            <TableCell>Patrol Time</TableCell>
                            <TableCell>Active</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockPatrols.map((patrol) => (
                            <TableRow key={patrol.id}>
                                <TableCell>{patrol.name}</TableCell>
                                <TableCell>{patrol.users}</TableCell>
                                <TableCell>{patrol.mosaics}</TableCell>
                                <TableCell>{patrol.interval}</TableCell>
                                <TableCell><Chip label={patrol.status} color={patrol.status === 'Active' ? 'success' : 'warning'} size="small" /></TableCell>
                                <TableCell align="center">
                                    <Stack direction="row" spacing={1} justifyContent="center">
                                        <Button size="small" startIcon={<PlayArrowIcon />} variant="outlined" sx={{ textTransform: 'none' }}>Run</Button>
                                        <Button size="small" startIcon={<EditIcon />} variant="outlined" sx={{ textTransform: 'none' }}>Edit</Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
}