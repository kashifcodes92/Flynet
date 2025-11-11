// src/pages/SuperAdmin/Communicator.jsx

import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, Stack, Divider, Select, MenuItem, TextareaAutosize, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';

export default function Communicator() {
    const [recipient, setRecipient] = useState('All');
    
    // Mock Data for Message History
    const mockHistory = [
        { id: 1, subject: 'System Update Alert', message: 'The platform will undergo maintenance...', date: '2025-10-28' },
        { id: 2, subject: 'New Feature Announcement', message: 'LPR functionality is now live.', date: '2025-10-25' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message submitted to: ${recipient}`);
    };

    return (
        <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Communicator
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
                Send messages and notifications across the platform
            </Typography>

            <Paper elevation={0} sx={{ p: 3, border: '1px solid #E0E0E0', borderRadius: 2 }}>
                
                {/* --- Compose Message Section --- */}
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                    <MessageIcon color="secondary" />
                    <Typography variant="h6" fontWeight="bold">Compose Message</Typography>
                </Stack>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                    
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                        <Typography variant="body1">Recipients:</Typography>
                        <TextField 
                            select 
                            value={recipient} 
                            onChange={(e) => setRecipient(e.target.value)}
                            size="small" 
                            sx={{ minWidth: 150 }}
                        >
                            <MenuItem value="All">All Users</MenuItem>
                            <MenuItem value="Super">Super Admin</MenuItem>
                            <MenuItem value="Tenants">All Tenants</MenuItem>
                        </TextField>
                        <Button size="small" variant="outlined" sx={{ textTransform: 'none' }}>Select All</Button>
                        <Button size="small" variant="outlined" sx={{ textTransform: 'none' }}>Deselect All</Button>
                    </Stack>

                    <TextField label="Subject*" fullWidth size="medium" required sx={{ mb: 2 }} />
                    
                    {/* Rich Text Editor Placeholder (Using a simple Textarea) */}
                    <TextareaAutosize
                        minRows={8}
                        placeholder="Message*"
                        style={{ width: '100%', padding: '10px', borderColor: '#ccc', borderRadius: '4px', resize: 'vertical', fontFamily: 'Roboto' }}
                    />
                    
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button type="submit" variant="contained" endIcon={<SendIcon />} sx={{ textTransform: 'none', backgroundColor: '#1C2536' }}>
                            Send
                        </Button>
                    </Box>
                </Box>
                
                <Divider sx={{ my: 4 }} />
                
                {/* --- Message History Section --- */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>Message History</Typography>
                
                <Paper sx={{ width: '100%' }}>
                    <Table size="small">
                        <TableHead sx={{ backgroundColor: '#F5F5F5' }}>
                            <TableRow>
                                <TableCell>Subject</TableCell>
                                <TableCell>Message Snippet</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {mockHistory.map((msg) => (
                                <TableRow key={msg.id}>
                                    <TableCell>{msg.subject}</TableCell>
                                    <TableCell>{msg.message.substring(0, 50)}...</TableCell>
                                    <TableCell>{msg.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>

            </Paper>
        </Box>
    );
}