// src/pages/SuperAdmin/AllBusiness.jsx (NAVIGATION FIX)

import React, { useState } from 'react';
import { Box, Typography, Button, TextField, InputAdornment, Paper, Divider, Stack, Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from 'react-router-dom';

// NOTE: BusinessTable must be implemented and imported
import BusinessTable from '@/components/feature/BusinessTable.jsx'; 

export default function AllBusiness() {
    const navigate = useNavigate();
    const [entries, setEntries] = useState(10);
    const [search, setSearch] = useState('');

    const toolbarActions = [
        { label: 'Export CSV', action: () => alert('Export CSV') },
        // ...
    ];

    const handleAddBusiness = () => {
        // CRITICAL FIX: Navigate to the new registration form route
        navigate('/admin/businesses/add'); 
    };

    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                All Businesses
            </Typography>
            {/* ... (rest of the UI structure) ... */}

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* --- Top Toolbar (Add Button & Export Actions) --- */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                    
                    {/* Add Button & Filters */}
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Button 
                            variant="contained" 
                            color="secondary"
                            startIcon={<AddIcon />}
                            onClick={handleAddBusiness} // <-- HANDLER ATTACHED
                            sx={{ textTransform: 'none' }}
                        >
                            + Add Business
                        </Button>
                        <Button size="small" variant="outlined" startIcon={<FilterListIcon />} sx={{ textTransform: 'none', borderColor: '#CCC' }}>
                            Filters
                        </Button>
                    </Stack>
                    
                    {/* ... (Export Actions remain the same) ... */}
                </Box>
                
                {/* ... (Divider, Search, and Table) ... */}
                <BusinessTable search={search} entries={entries} />

            </Paper>
        </Box>
    );
}