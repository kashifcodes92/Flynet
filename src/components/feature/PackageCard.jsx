// src/components/feature/PackageCard.jsx

import React from 'react';
import { Box, Typography, Paper, Chip, Button, List, ListItem, ListItemText, Divider, Stack, useTheme, ListItemIcon } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const PackageCard = ({ packageData }) => {
    const theme = useTheme();
    const { name, price, interval, status, features, description } = packageData;
    
    const isActive = status === 'Active';
    const statusColor = isActive ? 'success' : 'error';
    const statusLabel = isActive ? 'Active' : 'Inactive';
    
    const cardStyle = {
        p: 3, 
        height: '100%', 
        borderRadius: 2,
        border: `2px solid ${isActive ? theme.palette.success.main : theme.palette.error.main}`,
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <Paper elevation={1} sx={cardStyle}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                    {name}
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Chip label={statusLabel} color={statusColor} size="small" />
                    <EditIcon fontSize="small" sx={{ color: '#999', cursor: 'pointer' }} />
                    <DeleteIcon fontSize="small" sx={{ color: theme.palette.error.main, cursor: 'pointer' }} />
                </Stack>
            </Box>
            
            <Divider sx={{ mb: 2 }} />

            <Box sx={{ flexGrow: 1 }}>
                <List dense sx={{ p: 0 }}>
                    {features.map((feature, index) => (
                        <ListItem key={index} disableGutters sx={{ py: 0.2 }}>
                            <ListItemIcon sx={{ minWidth: 25 }}>
                                <CheckIcon fontSize="small" color={statusColor} />
                            </ListItemIcon>
                            <ListItemText primary={feature} primaryTypographyProps={{ fontSize: 14 }} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Box sx={{ mt: 3, textAlign: 'center', borderTop: '1px dashed #EEE', pt: 2 }}>
                <Typography variant="h5" fontWeight="bold" color={theme.palette.text.primary}>
                    {price === 'Free' ? 'Free' : `$${price}`} 
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 1 }}>
                    {interval && ` / ${interval}`}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                    {description}
                </Typography>
                
                <Button variant="contained" size="small" sx={{ mt: 2, textTransform: 'none', backgroundColor: theme.palette.primary.main }}>
                    View Details
                </Button>
            </Box>
        </Paper>
    );
};

export default PackageCard;