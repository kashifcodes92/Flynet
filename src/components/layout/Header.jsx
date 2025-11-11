// src/components/layout/Header.jsx (FINAL FLAG IMAGE FIDELITY CODE)

import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Badge, Menu, MenuItem, Typography, Select, FormControl, useTheme, Stack } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu'; 
import { useAuth } from '../../context/AuthContext.jsx'; 
import { useNavigate } from 'react-router-dom';

const Header = ({ drawerWidth, handleDrawerToggle }) => { 
    const { user, logout } = useAuth(); 
    const navigate = useNavigate();
    const theme = useTheme();

    // --- Language Data (Using image path and code) ---
    const languages = [
        // CRITICAL: We reference the image asset path
        { code: 'en-US', name: 'EN-US', image: '/US-flag.png' },
        { code: 'es', name: 'ES', image: '/flag-es.png' },
        { code: 'pt-BR', name: 'PT-BR', image: '/flag-br.png' },
    ];
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [language, setLanguage] = useState('en-US');
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    
    const handleLogout = () => { 
        handleMenuClose(); 
        logout(); 
    };

    // Profile Menu Markup
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem disabled>
                <Typography variant="body2" color="textSecondary">Signed in as:</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="body1" fontWeight="bold">{user?.name || 'Admin'}</Typography>
            </MenuItem>
            <MenuItem onClick={() => { handleMenuClose(); navigate('/user/profile'); }}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
        </Menu>
    );

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
                [theme.breakpoints.up('sm')]: {
                    ml: `${drawerWidth}px`,
                },
                minHeight: '64px' 
            }}>
                
                {/* --- LOGO / HAMBURGER SECTION (Left Side) --- */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    
                    {/* Hamburger Icon (Visible only on xs screens) */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: theme.palette.primary.main }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    {/* Placeholder for Page Title */}
                    {/* <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: 'normal', display: { xs: 'block', sm: 'block' } }}>
                        Super Admin
                    </Typography> */}
                </Box>
                
                {/* --- CONTROLS SECTION (Right Side) --- */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    
                    {/* --- LANGUAGE SELECTOR FIX (Image Flag Integration) --- */}
                    <FormControl variant="outlined" size="small">
                        <Select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            // Match Figma: Rounded corners, visible outline
                            sx={{
                                color: theme.palette.primary.main, 
                                fontWeight: 'bold',
                                backgroundColor: 'white',
                                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#E0E0E0' }
                            }}
                            // CRITICAL: Custom function to render the selected value with the image
                            renderValue={(selectedCode) => {
                                const lang = languages.find(l => l.code === selectedCode);
                                return (
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <img 
                                            src={lang.image} 
                                            alt={`${lang.name} flag`} 
                                            style={{ width: 20, height: 15 }} 
                                        />
                                        <Typography component="span" fontSize={14}>
                                            {lang.name}
                                        </Typography>
                                    </Stack>
                                );
                            }}
                        >
                            {languages.map((lang) => (
                                <MenuItem key={lang.code} value={lang.code}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <img 
                                            src={lang.image} 
                                            alt={`${lang.name} flag`} 
                                            style={{ width: 20, height: 15 }}
                                        />
                                        <Typography>{lang.name}</Typography>
                                    </Stack>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {/* Notifications Icon */}
                    <IconButton size="large" color="inherit">
                        <Badge badgeContent={3} color="error">
                            <NotificationsIcon sx={{ color: theme.palette.text.secondary }} />
                        </Badge>
                    </IconButton>
                    
                    {/* Profile Icon with Red Dot */}
                    <IconButton
                        size="large"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                        sx={{ ml: 1, mr: 0 }}
                    >
                        <Badge color="error" variant="dot" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}> 
                            <AccountCircle sx={{ color: theme.palette.primary.main }} />
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
            {renderMenu}
        </AppBar>
    );
};

export default Header;