// src/layouts/MainLayout.jsx
import React from 'react';
import { Box, CssBaseline, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar.jsx';
import Header from '../components/layout/Header.jsx';

const drawerWidth = 240;

export default function MainLayout({ userRole }) {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: 'url(public/assets/SAAS-imagesbackground.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <CssBaseline />
      <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        userRole={userRole}
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
