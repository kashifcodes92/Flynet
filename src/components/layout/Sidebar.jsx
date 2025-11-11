// src/components/layout/Sidebar.jsx (FINAL STABLE CODE)

import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Divider, useTheme } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import { superAdminMenu, tenantMenu } from '../../utils/constants.js'; 

const drawerWidth = 240;

const Sidebar = ({ userRole, drawerWidth, variant = 'permanent', mobileOpen = false, handleDrawerToggle = () => {}, ...props }) => {
    const theme = useTheme();
    const menuItems = userRole === 'SUPER_ADMIN' ? superAdminMenu : tenantMenu;
    const location = useLocation();

    const menuContent = (
        <Box onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle} sx={{ pt: 1 }}>
            {/* Logo and App Name Area */}
            <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'top', justifyContent: 'center', p: 2, mt: -9 }}>
                {/* LOGO PATH FIX: Use the stable public path */}
                {/* <img 
                    src="/flynet-logo.png" 
                    alt="flynet Logo" 
                    style={{ height: 35, marginBottom: 5 }}
                />
                <Typography variant="caption" sx={{ color:theme.palette.primary.main }}>
                    {userRole === 'SUPER_ADMIN' ? 'Super Admin' : 'VMS Panel'}
                </Typography> */}
            </Toolbar>
            <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
            
            {/* Menu Items List */}
            <List>
                {menuItems.map((item) => (
                    <React.Fragment key={item.text}>
                        <ListItem disablePadding sx={{ py: 0.5 }}>
                            <ListItemButton
                                component={Link}
                                to={item.path}
                                // Checks if the current path OR a path starting with the item's path is active
                                selected={location.pathname === item.path || location.pathname.startsWith(item.path + '/')}
                                sx={{
                                    py: 1,
                                    '&.Mui-selected': { 
                                        backgroundColor: '#20418386', // Light background for active
                                        color: theme.palette.primary.main, // Dark text for active
                                        borderLeft: `4px solid ${theme.palette.error.main}`, // Red accent border
                                        '&:hover': { backgroundColor: '#14285063',color: '#021842ff' },
                                    },
                                    '&:hover': { backgroundColor: 'rgba(4, 6, 99, 0.35)' },
                                    pl: 2.5 // Left padding for spacing
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 40 }}>
                                    {/* Icon color changes based on active state */}
                                    <item.icon sx={{ color: location.pathname === item.path || location.pathname.startsWith(item.path + '/') ? 'theme.palette.primary.main' : theme.palette.primary.main }} />
                                </ListItemIcon>
                                <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: 14 }} />
                            </ListItemButton>
                        </ListItem>
                        {item.divider && <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer
            variant={variant}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }} 
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { 
                    width: drawerWidth, 
                    boxSizing: 'border-box',
                    backgroundColor: '#FFF', 
                    color: theme.palette.primary.main, 
                },
                ...props.sx 
            }}
        >
            {/* The Toolbar here helps push the logo down below the Header's height */}
            <Toolbar /> 
            {menuContent}
        </Drawer>
    );
};

export default Sidebar;