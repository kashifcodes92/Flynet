// src/components/layout/Header.jsx

import React, { useState } from 'react';
import { 
    AppBar, Toolbar, Box, IconButton, Badge, Typography,
    Select, FormControl, useTheme, Stack, MenuItem
} from '@mui/material';

import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const Header = ({ drawerWidth, handleDrawerToggle }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const theme = useTheme();

    const languages = [
        { code: 'en-US', name: 'EN-US', image: '/US-flag.png' },
        { code: 'es', name: 'ES', image: '/flag-es.png' },
        { code: 'pt-BR', name: 'PT-BR', image: '/flag-br.png' },
    ];

    const [language, setLanguage] = useState('en-US');

    return (
        <AppBar 
            position="fixed"
            sx={{ 
                zIndex: (theme) => theme.zIndex.drawer + 1, 
                backgroundColor: 'white', 
                color: 'black',
            }}
        >
            <Toolbar sx={{ 
                justifyContent: 'space-between', 
                [theme.breakpoints.up('sm')]: { ml: `${drawerWidth}px` },
                minHeight: '64px'
            }}>

                {/* Logo */}
                <img
                    src="/flynet-logo.png"
                    alt="flynet Logo"
                    onClick={() => navigate('/')}
                    style={{ height: 35, position: 'absolute', left: -210, cursor: 'pointer' }}
                />

                {/* Left Side: Hamburger (Mobile Only) */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: theme.palette.primary.main }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

                {/* Right Side Controls */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>

                    {/* Language Selector */}
                    <FormControl variant="outlined" size="small">
                        <Select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            sx={{
                                fontWeight: 'bold',
                                backgroundColor: 'white',
                                borderRadius: 2,
                                mr: 1,
                                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#E0E0E0' }
                            }}
                            renderValue={(selected) => {
                                const lang = languages.find(l => l.code === selected);
                                return (
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <img src={lang.image} alt="" style={{ width: 20, height: 15 }} />
                                        <Typography fontSize={14}>{lang.name}</Typography>
                                    </Stack>
                                );
                            }}
                        >
                            {languages.map((lang) => (
                                <MenuItem key={lang.code} value={lang.code}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <img src={lang.image} alt="" style={{ width: 20, height: 15 }} />
                                        <Typography>{lang.name}</Typography>
                                    </Stack>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {/* Notifications */}
                    <IconButton size="large" onClick={() => navigate('/admin/notifications')}>
                        <Badge badgeContent={3} color="error">
                            <NotificationsIcon sx={{ color: theme.palette.primary.main }} />
                        </Badge>
                    </IconButton>

                    {/* Profile → Profile Page */}
                    <IconButton size="large" onClick={() => navigate('/user/profile')}>
                        <AccountCircleIcon sx={{ color: theme.palette.primary.main }} />
                    </IconButton>

                    {/* Logout (Red Button) */}
                    <IconButton
                        size="large"
                        onClick={logout}
                        sx={{ 
                            backgroundColor: '#EB5757',
                            borderRadius: '50%',
                            width: 34,
                            height: 34,
                            ml: 1,
                            '&:hover': { backgroundColor: '#D84343' }
                        }}
                    >
                        <LogoutIcon sx={{ color: 'white', fontSize: 20 }} />
                    </IconButton>

                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
