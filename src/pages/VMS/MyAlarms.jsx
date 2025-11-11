// src/pages/VMS/MyAlarms.jsx (FINAL AND COMPLETE CODE - Alert Inbox)

import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, InputAdornment, Table, TableHead, TableRow, TableCell, TableBody, Chip, Button, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DoneIcon from '@mui/icons-material/Done';
import WarningIcon from '@mui/icons-material/Warning';
import AddIcon from '@mui/icons-material/Add'; 
import { useNavigate } from 'react-router-dom';

// Mock Alarm Data
const mockAlarms = [
    { id: 1, type: 'Face Match (Watchlist)', camera: 'Entrance CAM 1', time: '10:30 AM', status: 'Unresolved', details: 'High-confidence match found.' },
    { id: 2, type: 'Motion Alert', camera: 'Warehouse Rear', time: '02:15 AM', status: 'Resolved', details: 'Unusual movement detected.' },
];

export default function MyAlarms() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleAddAlarm = () => {
        // Navigates to the Alarms Register page for convenience
        navigate('/vms-client/alarms/register'); 
    };

    const getStatusChip = (status) => {
        const color = status === 'Resolved' ? 'success' : 'error';
        const icon = status === 'Resolved' ? <DoneIcon fontSize="small" /> : <WarningIcon fontSize="small" />;
        return <Chip label={status} color={color} size="small" icon={icon} />;
    };

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight="bold">
                    My Alarms (Alert Inbox)
                </Typography>
                <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={handleAddAlarm} sx={{ textTransform: 'none' }}>
                    + Add New Rule
                </Button>
            </Stack>

            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                Review and manage surveillance alerts
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* Search and Filters Toolbar */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h6" fontWeight="bold">Active Alerts ({mockAlarms.length})</Typography>
                    <TextField 
                        size="small" 
                        placeholder="Search alarms..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>),
                        }}
                    />
                </Box>

                {/* Alarms Table */}
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                        <TableRow>
                            <TableCell>Time</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Camera</TableCell>
                            <TableCell>Details</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockAlarms.map((alarm) => (
                            <TableRow key={alarm.id}>
                                <TableCell>{alarm.time}</TableCell>
                                <TableCell>{alarm.type}</TableCell>
                                <TableCell>{alarm.camera}</TableCell>
                                <TableCell>{alarm.details}</TableCell>
                                <TableCell>{getStatusChip(alarm.status)}</TableCell>
                                <TableCell align="center">
                                    <Button size="small" variant="outlined" disabled={alarm.status === 'Resolved'} sx={{ textTransform: 'none' }}>Resolve</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
}