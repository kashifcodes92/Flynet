// src/pages/VMS/Access.jsx

import React from 'react';
import { Box, Typography, Paper, Grid, Stack } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PeopleIcon from '@mui/icons-material/People';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LockIcon from '@mui/icons-material/Lock';

// Mock Data for Status and Usage
const mockUsage = {
    total: 275,
    customers: 3,
    remaining: 69,
    used: 203,
};

const mockResources = [
    { label: 'Cameras', inUse: 203, total: 272, icon: CameraAltIcon },
    { label: 'Pre Alarm', inUse: 0, total: 0, icon: VisibilityIcon },
    { label: 'Analytical', inUse: 0, total: 0, icon: PeopleIcon },
    { label: 'LPR', inUse: 0, total: 0, icon: LockIcon },
    { label: 'Live', inUse: 0, total: 0, icon: VisibilityIcon },
    { label: 'LPR on board', inUse: 0, total: 0, icon: LockIcon },
];

const SummaryCard = ({ title, value, color }) => (
    <Paper elevation={0} sx={{ p: 2, backgroundColor: color || '#E3F2FD', color: 'black', textAlign: 'center', borderRadius: 1 }}>
        <Typography variant="h6" color="text.primary">{title}</Typography>
        <Typography variant="h4" fontWeight="bold">{value}</Typography>
    </Paper>
);

const ResourceCard = ({ label, inUse, total }) => (
    <Paper elevation={0} sx={{ p: 2, border: '1px solid #E0E0E0', textAlign: 'center', borderRadius: 1 }}>
        <Typography variant="body2" color="textSecondary">{label}</Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 0.5 }}>{inUse} / {total}</Typography>
        <Typography variant="caption" color="textSecondary">In use / Total</Typography>
    </Paper>
);

export default function Access() {
    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Access and Resource Usage
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                View total allocated and consumed resources for this site
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={6} md={3}><SummaryCard title="Total" value={mockUsage.total} /></Grid>
                <Grid item xs={6} md={3}><SummaryCard title="Customers" value={mockUsage.customers} color="#B3E5FC" /></Grid>
                <Grid item xs={6} md={3}><SummaryCard title="Remaining" value={mockUsage.remaining} color="#E0F7FA" /></Grid>
                <Grid item xs={6} md={3}><SummaryCard title="Used" value={mockUsage.used} color="#FBE9E7" /></Grid>
            </Grid>

            <Grid container spacing={3}>
                {mockResources.map((resource, index) => (
                    <Grid item xs={6} md={3} key={index}>
                        <ResourceCard {...resource} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}