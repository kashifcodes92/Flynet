// src/pages/SuperAdmin/NotificationCenter.jsx

import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Stack, Checkbox, IconButton, Chip } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteIcon from '@mui/icons-material/Delete';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

// Mock Notification Data
const mockNotifications = [
    { id: 1, type: 'Alarm', subject: 'Face Match Alert', time: '10 min ago', status: 'Unread' },
    { id: 2, type: 'System', subject: 'Subscription expiring soon', time: '1 day ago', status: 'Unread' },
    { id: 3, type: 'System', subject: 'New Feature Rollout', time: '3 days ago', status: 'Read' },
];

export default function NotificationCenter() {
    const [notifications, setNotifications] = useState(mockNotifications);
    const [selected, setSelected] = useState([]);
    const [showFilters, setShowFilters] = useState(false);

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = notifications.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    const handleMarkRead = () => {
        // Logic to mark selected items as read via API
        alert(`Marking ${selected.length} notifications as read.`);
        setSelected([]);
    };
    
    const handleDeleteSelected = () => {
        // Logic to delete selected items
        alert(`Deleting ${selected.length} notifications.`);
        setSelected([]);
    };

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    Notification Center
                </Typography>
                <Stack direction="row" spacing={1}>
                    {/* Bulk Action Buttons (Visible only if items are selected) */}
                    {selected.length > 0 && (
                        <>
                            <Button 
                                variant="contained" 
                                size="small" 
                                startIcon={<MarkEmailReadIcon />}
                                onClick={handleMarkRead}
                                sx={{ textTransform: 'none' }}
                            >
                                Mark as Read
                            </Button>
                            <Button 
                                variant="contained" 
                                size="small" 
                                startIcon={<DeleteIcon />}
                                onClick={handleDeleteSelected}
                                color="error"
                                sx={{ textTransform: 'none' }}
                            >
                                Delete ({selected.length})
                            </Button>
                        </>
                    )}
                    
                    <Button 
                        variant="outlined" 
                        size="small" 
                        startIcon={<FilterListIcon />}
                        onClick={() => setShowFilters(true)}
                        sx={{ textTransform: 'none', borderColor: '#CCC' }}
                    >
                        Filters
                    </Button>
                </Stack>
            </Stack>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* Notification List Table */}
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    indeterminate={selected.length > 0 && selected.length < notifications.length}
                                    checked={notifications.length > 0 && selected.length === notifications.length}
                                    onChange={handleSelectAllClick}
                                    inputProps={{ 'aria-label': 'select all notifications' }}
                                />
                            </TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Subject</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {notifications.map((notification) => {
                            const isItemSelected = isSelected(notification.id);
                            return (
                                <TableRow 
                                    hover
                                    onClick={() => handleClick(notification.id)}
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={notification.id}
                                    selected={isItemSelected}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox color="primary" checked={isItemSelected} />
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
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>

            {/* Filter Modal Placeholder (Visible if showFilters is true) */}
            {showFilters && (
                <Box sx={{ mt: 3, p: 3, border: '1px solid #CCC' }}>
                    <Typography>Filter Options Placeholder...</Typography>
                    <Button onClick={() => setShowFilters(false)}>Close Filters</Button>
                </Box>
            )}
        </Box>
    );
}