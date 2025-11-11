// src/pages/VMS/NotificationCenter.jsx (FINAL AND COMPLETE CODE)

import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Stack, Checkbox, Chip, TextField, InputAdornment } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';

// Mock Notification Data
const mockNotifications = [
    { id: 1, type: 'Alarm', subject: 'Face Match Alert', time: '10 min ago', status: 'Unread' },
    { id: 2, type: 'System', subject: 'Subscription expiring soon', time: '1 day ago', status: 'Read' },
];

export default function NotificationCenter() {
    const [notifications, setNotifications] = useState(mockNotifications);
    
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    Notification Center
                </Typography>
                <Button variant="outlined" startIcon={<FilterListIcon />} sx={{ textTransform: 'none', borderColor: '#CCC' }}>
                    Filters
                </Button>
            </Stack>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
                    <TextField 
                        size="small" 
                        placeholder="Search notifications..."
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                
                {/* Notification List Table */}
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                        <TableRow>
                            <TableCell padding="checkbox"></TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Subject</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockNotifications.map((notification) => (
                            <TableRow key={notification.id} hover sx={{ cursor: 'pointer' }}>
                                <TableCell padding="checkbox">
                                    <Checkbox color="primary" />
                                </TableCell>
                                <TableCell>{notification.type}</TableCell>
                                <TableCell>{notification.subject}</TableCell>
                                <TableCell>{notification.time}</TableCell>
                                <TableCell>
                                    <Chip 
                                        label={notification.status} 
                                        color={notification.status === 'Unread' ? 'error' : 'default'} 
                                        size="small" 
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <Button size="small" variant="outlined">View</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
}