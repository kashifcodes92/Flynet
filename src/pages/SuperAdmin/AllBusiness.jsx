// src/pages/SuperAdmin/AllBusiness.jsx

import React, { useState } from 'react';
import { Box, Typography, Button, TextField, InputAdornment, Paper, Divider, Stack, Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from 'react-router-dom';

// CRITICAL FIX: Using the absolute alias '@' for guaranteed resolution
import BusinessTable from '@/components/feature/BusinessTable.jsx'; 

export default function AllBusiness() {
    const navigate = useNavigate();
    const [entries, setEntries] = useState(10);
    const [search, setSearch] = useState('');

    const toolbarActions = [
        { label: 'Export CSV', action: () => alert('Export CSV') },
        { label: 'Export Excel', action: () => alert('Export Excel') },
        { label: 'Print', action: () => alert('Print') },
        { label: 'Column visibility', action: () => alert('Column Visibility') },
        { label: 'Export PDF', action: () => alert('Export PDF') },
    ];

    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                All Businesses
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                Manage all business accounts in the platform
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* --- Top Toolbar (Add Button & Export Actions) --- */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                    
                    {/* Add Button & Filters */}
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Button 
                            variant="contained" 
                            color="secondary"
                            startIcon={<AddIcon />}
                            onClick={() => navigate('/sa/add-business')}
                            sx={{ textTransform: 'none' }}
                        >
                            + Add Business
                        </Button>
                        <Button size="small" variant="outlined" startIcon={<FilterListIcon />} sx={{ textTransform: 'none', borderColor: '#CCC' }}>
                            Filters
                        </Button>
                    </Stack>

                    {/* Export Actions */}
                    <Stack direction="row" spacing={1} alignItems="center">
                        {toolbarActions.map((item) => (
                            <Button key={item.label} size="small" variant="outlined" onClick={item.action} sx={{ textTransform: 'none' }}>
                                {item.label}
                            </Button>
                        ))}
                    </Stack>
                </Box>
                
                <Divider sx={{ my: 2 }} />

                {/* --- Search and Entry Selector --- */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
                    
                    {/* Show Entries Selector */}
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="body2">Show</Typography>
                        <TextField 
                            select 
                            value={entries} 
                            onChange={(e) => setEntries(Number(e.target.value))}
                            size="small" 
                            sx={{ width: 80 }}
                        >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                        </TextField>
                        <Typography variant="body2">entries</Typography>
                    </Stack>

                    {/* Search Field */}
                    <TextField 
                        size="small" 
                        placeholder="Search..."
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
                
                {/* --- Business Data Table --- */}
                {/* Ensure BusinessTable is rendered with data from a mock/API state if loading dynamically */}
                <BusinessTable search={search} entries={entries} />

            </Paper>
        </Box>
    );
}