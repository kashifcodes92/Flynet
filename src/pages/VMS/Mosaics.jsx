// src/pages/VMS/Mosaics.jsx (FINAL FIDELITY CODE)

import React from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Stack, Chip, TextField, InputAdornment } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';

// Mock Data (Master Mosaics List)
const mockMosaics = [
    { id: 1, name: 'Default 4-Grid', type: 'Cameras', capacity: 4, cameras: 4, users: 5, active: true },
    { id: 2, name: 'Warehouse Focus', type: 'LPR', capacity: 16, cameras: 3, users: 12, active: true },
];

export default function Mosaics() {
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    Mosaics Configuration
                </Typography>
                <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={() => console.log('Navigate to Mosaics Register')} sx={{ textTransform: 'none' }}>
                    + Create New Layout
                </Button>
            </Stack>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* Toolbar: Add Button and Search Bar (Matching Figma) */}
                <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                    <TextField 
                        size="small" 
                        placeholder="Search..."
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Stack>

                {/* Mosaics Table (Matching Figma structure) */}
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Capacity</TableCell>
                            <TableCell>Cameras</TableCell>
                            <TableCell>Users</TableCell>
                            <TableCell>Active</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockMosaics.map((mosaic) => (
                            <TableRow key={mosaic.id}>
                                <TableCell>{mosaic.name}</TableCell>
                                <TableCell>{mosaic.type}</TableCell>
                                <TableCell>{mosaic.capacity}</TableCell>
                                <TableCell>{mosaic.cameras}</TableCell>
                                <TableCell>{mosaic.users}</TableCell>
                                <TableCell>{mosaic.active ? '✅' : '❌'}</TableCell>
                                <TableCell align="center">
                                    <Button size="small" startIcon={<EditIcon />} variant="outlined">Edit</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
}