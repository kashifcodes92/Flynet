// src/layouts/MainLayout.jsx (CRITICAL GLOBAL BACKGROUND FIX)

import React from 'react';
import { Box, Toolbar, CssBaseline, useTheme } from '@mui/material';
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
            width: '100vw', // Ensure full viewport width
            
            // CRITICAL FIX: Global Background Applied Here
            // Assuming the subtle shape image is accessible from the public root
            backgroundImage: 'url(public\assets\SAAS-images\background.png)', 
            backgroundSize: 'cover',
            backgroundPosition: 'top left',
            backgroundRepeat: 'no-repeat',
            backgroundColor: theme.palette.background.default, 
        }}
    >
      <CssBaseline /> 

      {/* Header component (Pass toggle handler for mobile menu) */}
      <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
      
      {/* Sidebar component - Desktop (Permanent) & Mobile (Temporary) */}
      <Box 
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Mobile Temporary Drawer (Visible only on xs screens) */}
        <Sidebar 
          userRole={userRole} 
          drawerWidth={drawerWidth} 
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          variant="temporary"
          sx={{ display: { xs: 'block', sm: 'none' } }}
        />
        
        {/* Desktop Permanent Drawer (Visible sm and up) */}
        <Sidebar 
          userRole={userRole} 
          drawerWidth={drawerWidth} 
          variant="permanent"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        />
      </Box>


      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
            flexGrow: 1,
            p: 3, 
            width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` },
            minHeight: '100vh', 
            backgroundColor: 'transparent', // Let the global background show through
        }}
      >
        <Toolbar /> 
        <Outlet /> 
      </Box>
    </Box>
  );
}