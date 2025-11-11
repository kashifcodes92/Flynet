// src/pages/VMS/MyPatrols.jsx

import React from 'react';
import { Box, Typography, Paper, Button, Stack, Table, TableHead, TableRow, TableCell, TableBody, Chip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EditIcon from '@mui/icons-material/Edit';

// Mock Patrol Data
const mockPatrols = [
    { id: 1, name: 'Main Gate Perimeter', interval: '10 min', status: 'Active', cameras: 5, assignedUsers: 2 },
    { id: 2, name: 'Warehouse Sweep', interval: '30 min', status: 'Inactive', cameras: 3, assignedUsers: 1 },
];

export default function MyPatrols() {
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    My Patrols
                </Typography>
                <Button variant="contained" color="secondary" startIcon={<AddIcon />} sx={{ textTransform: 'none' }}>
                    + Create New Patrol
                </Button>
            </Stack>

            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                Configure and monitor automated camera patrol routes
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* Patrols Table */}
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                        <TableRow>
                            <TableCell>Patrol Name</TableCell>
                            <TableCell>Interval</TableCell>
                            <TableCell>Cameras</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockPatrols.map((patrol) => (
                            <TableRow key={patrol.id}>
                                <TableCell>{patrol.name}</TableCell>
                                <TableCell>{patrol.interval}</TableCell>
                                <TableCell>{patrol.cameras}</TableCell>
                                <TableCell>
                                    <Chip label={patrol.status} color={patrol.status === 'Active' ? 'success' : 'warning'} size="small" />
                                </TableCell>
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