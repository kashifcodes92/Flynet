// src/pages/VMS/Groups.jsx

import React from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

// Mock Data
const mockGroups = [
    { id: 1, name: 'Managers', users: 5, cameras: 12, permissions: 'Full Access' },
    { id: 2, name: 'Viewers', users: 20, cameras: 8, permissions: 'View Only' },
];

export default function Groups() {
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    User Groups
                </Typography>
                <Button variant="contained" color="secondary" startIcon={<AddIcon />} sx={{ textTransform: 'none' }}>
                    + Add New Group
                </Button>
            </Stack>

            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                Manage permissions and camera access for teams
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                        <TableRow>
                            <TableCell>Group Name</TableCell>
                            <TableCell>Users</TableCell>
                            <TableCell>Cameras Assigned</TableCell>
                            <TableCell>Permissions</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockGroups.map((group) => (
                            <TableRow key={group.id}>
                                <TableCell>{group.name}</TableCell>
                                <TableCell>{group.users}</TableCell>
                                <TableCell>{group.cameras}</TableCell>
                            <TableCell>{group.permissions}</TableCell>
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