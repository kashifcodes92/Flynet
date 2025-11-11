// src/components/feature/BusinessTable.jsx

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Button, Chip, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import LockIcon from '@mui/icons-material/Lock'; 

// Mock Data (Finalized for UI Screenshot)
const mockBusinesses = [
    { id: 1, registered: '08/18/2025 18:42', name: 'Manufactures Demo', owner: 'Mr. Mike Lee', email: 'demo@demo.com', status: 'Active', subscription: '10/20/2025 - 11/19/2025', address: 'C, S, USA Infront of XYZ, Z' },
    { id: 2, registered: '08/18/2025 18:42', name: 'Global Corp', owner: 'Jane Doe', email: 'jane@global.com', status: 'Active', subscription: '10/20/2025 - 11/19/2025', address: 'C, S, USA Infront of XYZ, Z' },
    { id: 3, registered: '08/18/2025 18:42', name: 'Test Services', owner: 'Aamir Khan', email: 'aamir@test.com', status: 'Deactivated', subscription: 'N/A', address: 'C, S, USA Infront of XYZ, Z' },
    { id: 4, registered: '08/18/2025 18:42', name: 'Retail Store', owner: 'Sana Khan', email: 'sana@retail.com', status: 'Active', subscription: '10/20/2025 - 11/19/2025', address: 'C, S, USA Infront of XYZ, Z' },
];

const BusinessTable = ({ search = '', entries = 10 }) => {
    
    // Simple client-side filtering/slicing for the mock data
    const filteredAndSlicedData = mockBusinesses.filter(b => 
        b.name.toLowerCase().includes(search.toLowerCase())
    ).slice(0, entries);

    const getStatusChip = (status) => {
        const color = status === 'Active' ? 'success' : 'error';
        const label = status;
        return <Chip label={label} color={color} size="small" />;
    };

    return (
        <TableContainer component={Box}>
            <Table size="small" sx={{ minWidth: 1000 }}>
                <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                    <TableRow>
                        <TableCell>Registered On</TableCell>
                        <TableCell>Business Name</TableCell>
                        <TableCell>Owner</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Current Subscription</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredAndSlicedData.map((row) => (
                        <TableRow 
                            key={row.id} 
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': { backgroundColor: '#FAFAFA' } }}
                        >
                            <TableCell>{row.registered}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.owner}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell>{getStatusChip(row.status)}</TableCell>
                            <TableCell>{row.subscription}</TableCell>
                            <TableCell align="center">
                                <Stack sx={{ gap: 0.5 }}>
                                    <Button size="small" sx={{ textTransform: 'none', color: '#1C2536', p: 0 }}>Manage</Button>
                                    <Button size="small" sx={{ textTransform: 'none', color: '#00C8FF', p: 0 }}>Add Subscription</Button>
                                    <Button size="small" startIcon={<LockIcon fontSize="small" />} sx={{ textTransform: 'none', color: '#999', p: 0 }}>Deactivate</Button>
                                    <Button size="small" startIcon={<DeleteIcon fontSize="small" />} color="error" sx={{ textTransform: 'none', p: 0 }}>Delete</Button>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/* Pagination Placeholder */}
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #E0E0E0' }}>
                 <Typography variant="caption">Displaying 1 to {filteredAndSlicedData.length} of {mockBusinesses.length} results</Typography>
            </Box>
        </TableContainer>
    );
};

export default BusinessTable;