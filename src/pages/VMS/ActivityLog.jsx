// src/pages/VMS/ActivityLog.jsx (FINAL FIDELITY CODE)

import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Stack, TextField, InputAdornment } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';

// Mock Data
const mockActivities = [
    { id: 1, time: '1:03 PM', user: 'Maria Marquez', action: 'opened camera 728479', duration: '6 minutes ago', date: 'October 23, 2025' },
    { id: 2, time: '12:56 PM', user: 'DEMO FULL', action: 'downloaded video 297360', duration: '12 minutes ago', date: 'October 22, 2025' },
];

// Helper to render log timeline structure
const TimelineItem = ({ item }) => (
    <Box sx={{ borderLeft: '3px solid #DDD', ml: 2, position: 'relative', pb: 2 }}>
        {/* Simplified Timeline Dot */}
        <Box sx={{ position: 'absolute', left: -11, top: 0, backgroundColor: '#1C2536', width: 20, height: 20, borderRadius: '50%', }} />

        {/* Content Box */}
        <Box sx={{ ml: 3, p: 1, backgroundColor: 'white', borderRadius: 1, boxShadow: 1 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <Typography variant="body2">
                    <Typography component="span" fontWeight="bold" sx={{ mr: 1 }}>{item.time}</Typography>
                    <Typography component="span" fontWeight="bold" color="primary" sx={{ mr: 1 }}>{item.user}</Typography>
                    {item.action}
                </Typography>
                <Typography variant="caption" color="textSecondary">{item.duration}</Typography>
            </Stack>
        </Box>
    </Box>
);

export default function ActivityLog() {
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    Activity Log
                </Typography>
                <Button variant="outlined" startIcon={<FilterListIcon />} sx={{ textTransform: 'none', borderColor: '#CCC' }}>
                    Filters
                </Button>
            </Stack>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>{mockActivities[0].date}</Typography>
                
                {/* Render Timeline Items */}
                {mockActivities.map((item) => (
                    <TimelineItem key={item.id} item={item} />
                ))}
            </Paper>
        </Box>
    );
}