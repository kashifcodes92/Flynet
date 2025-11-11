// src/pages/VMS/Permissions.jsx

import React from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Stack, Chip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

// Mock Data
const mockPermissions = [
    { id: 1, name: 'Day Shift Manager', cameras: 10, videos: 'Allow Download', alerts: 'Enabled' },
    { id: 2, name: 'Night Guard', cameras: 5, videos: 'View Only', alerts: 'Disabled' },
];

export default function Permissions() {
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    Access Permissions
                </Typography>
                <Button variant="contained" color="secondary" startIcon={<AddIcon />} sx={{ textTransform: 'none' }}>
                    + Create Permission Set
                </Button>
            </Stack>

            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                Customize viewing and control privileges for different user roles
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                        <TableRow>
                            <TableCell>Set Name</TableCell>
                            <TableCell>Cameras Viewable</TableCell>
                            <TableCell>Video Access</TableCell>
                            <TableCell>Alerts</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockPermissions.map((set) => (
                            <TableRow key={set.id}>
                                <TableCell>{set.name}</TableCell>
                                <TableCell>{set.cameras}</TableCell>
                                <TableCell>{set.videos}</TableCell>
                                <TableCell>
                                    <Chip label={set.alerts} color={set.alerts === 'Enabled' ? 'success' : 'error'} size="small" />
                                </TableCell>
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