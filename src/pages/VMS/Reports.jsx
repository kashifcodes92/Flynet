// src/pages/VMS/Reports.jsx

import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Stack, Chip, TextField, InputAdornment, IconButton, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GetAppIcon from '@mui/icons-material/GetApp';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Mock Report Data (Includes AI People Counting and Activity Logs)
const mockReports = [
    { id: 1, name: 'Daily People Counting Summary', type: 'AI Analytics', date: '2025-10-29', status: 'Completed', format: 'PDF' },
    { id: 2, name: 'System Activity Log - Q4', type: 'System Log', date: '2025-10-25', status: 'Completed', format: 'CSV' },
    { id: 3, name: 'Alarm Summary - Oct', type: 'VMS Alerts', date: '2025-10-01', status: 'Processing', format: 'PDF' },
];

export default function Reports() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [search, setSearch] = useState('');

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const getStatusChip = (status) => {
        const color = status === 'Completed' ? 'success' : status === 'Processing' ? 'warning' : 'default';
        return <Chip label={status} color={color} size="small" />;
    };

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    System Reports
                </Typography>
                <Button variant="contained" color="secondary" startIcon={<AddIcon />} sx={{ textTransform: 'none' }}>
                    + Generate Report
                </Button>
            </Stack>

            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                Generate and download system-wide analytics, logs, and activity reports
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* Search Toolbar */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
                    <TextField 
                        size="small" 
                        placeholder="Search report name or type..."
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

                {/* Reports Table */}
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Report Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Date Requested</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockReports.map((report) => (
                            <TableRow key={report.id}>
                                <TableCell>{report.id}</TableCell>
                                <TableCell>{report.name}</TableCell>
                                <TableCell>{report.type}</TableCell>
                                <TableCell>{report.date}</TableCell>
                                <TableCell>{getStatusChip(report.status)}</TableCell>
                                <TableCell align="center">
                                    <Stack direction="row" spacing={1} justifyContent="center">
                                        <Button size="small" startIcon={<GetAppIcon />} variant="outlined" disabled={report.status !== 'Completed'} sx={{ textTransform: 'none' }}>
                                            Download
                                        </Button>
                                        <IconButton size="small" onClick={handleMenuOpen}>
                                            <MoreVertIcon />
                                        </IconButton>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Dropdown Menu for More Actions (e.g., View Details, Delete) */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>View Details</MenuItem>
                    <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>Delete Report</MenuItem>
                </Menu>
            </Paper>
        </Box>
    );
}