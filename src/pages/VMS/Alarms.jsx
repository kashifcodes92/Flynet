// src/pages/VMS/Alarms.jsx (FINAL AND COMPLETE CODE - Rules Configuration)

import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Stack, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add'; 
import { useNavigate } from 'react-router-dom'; 

// Mock Alarm Data (Simplified)
const mockAlarms = []; 

export default function Alarms() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate(); 

    const handleAddAlarm = () => {
        // Navigate to the Alarms Register page
        navigate('/vms-client/alarms/register'); 
    };

    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Alarms (Rules Configuration)
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                Configure and manage system detection rules
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* Toolbar: Add Button and Search Bar (Matching Figma) */}
                <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        startIcon={<AddIcon />} 
                        onClick={handleAddAlarm} 
                        sx={{ textTransform: 'none' }}
                    >
                        + Add
                    </Button>
                    <TextField 
                        size="small" 
                        placeholder="Search"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Stack>

                {/* Alarms Table (Currently showing "No results found!") */}
                <Table size="small">
                    <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Cameras</TableCell>
                            <TableCell>Users</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockAlarms.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} align="center">
                                    No results found!
                                </TableCell>
                            </TableRow>
                        ) : (
                            null 
                        )}
                    </TableBody>
                </Table>
                
                <Box sx={{ p: 2, borderTop: '1px solid #E0E0E0', mt: 2 }}>
                    <Typography variant="caption">Displaying 0 to 0 of 0 results</Typography>
                </Box>
            </Paper>
        </Box>
    );
}