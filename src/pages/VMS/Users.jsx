// src/pages/VMS/Users.jsx

import React from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Stack, Chip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

// Mock Data
const mockUsers = [
    { id: 1, name: 'Ahmed Khan', email: 'ahmed@biz.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Sara Ali', email: 'sara@biz.com', role: 'Viewer', status: 'Inactive' },
];

export default function Users() {
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    Manage Users
                </Typography>
                <Button variant="contained" color="secondary" startIcon={<AddIcon />} sx={{ textTransform: 'none' }}>
                    + Add New User
                </Button>
            </Stack>

            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                View and configure access for all site users
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockUsers.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>
                                    <Chip label={user.status} color={user.status === 'Active' ? 'success' : 'warning'} size="small" />
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