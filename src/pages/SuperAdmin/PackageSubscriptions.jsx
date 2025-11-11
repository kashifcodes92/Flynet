// src/pages/SuperAdmin/PackageSubscriptions.jsx

import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Stack, Chip, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import EditIcon from '@mui/icons-material/Edit';

// Mock Subscription Data
const mockSubscriptions = [
    { id: 101, business: 'Manufactures Demo', package: 'Regular', renewal: '2025-11-19', status: 'Active', renewalType: 'Monthly' },
    { id: 102, business: 'Global Corp', package: 'Unlimited', renewal: '2025-11-25', status: 'Pending Renewal', renewalType: 'Yearly' },
    { id: 203, business: 'Test Services', package: 'Starter - Free', renewal: '2025-10-30', status: 'Expired', renewalType: 'Monthly' },
];

export default function PackageSubscriptions() {
    const [search, setSearch] = useState('');

    const getStatusChip = (status) => {
        let color = 'default';
        if (status === 'Active') color = 'success';
        if (status === 'Pending Renewal') color = 'warning';
        if (status === 'Expired') color = 'error';
        return <Chip label={status} color={color} size="small" />;
    };

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    Package Subscriptions
                </Typography>
                <IconButton color="secondary" onClick={() => alert('Refreshing data...')}>
                    <RefreshIcon />
                </IconButton>
            </Stack>

            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                View and manage current subscription statuses and renewal dates
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* Search Toolbar */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
                    <TextField 
                        size="small" 
                        placeholder="Search business or package..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                {/* Subscriptions Table */}
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Business Name</TableCell>
                            <TableCell>Package</TableCell>
                            <TableCell>Renewal Type</TableCell>
                            <TableCell>Renewal Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockSubscriptions.map((sub) => (
                            <TableRow key={sub.id}>
                                <TableCell>{sub.id}</TableCell>
                                <TableCell>{sub.business}</TableCell>
                                <TableCell>{sub.package}</TableCell>
                                <TableCell>{sub.renewalType}</TableCell>
                                <TableCell>{sub.renewal}</TableCell>
                                <TableCell>{getStatusChip(sub.status)}</TableCell>
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