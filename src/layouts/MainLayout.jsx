// src/layouts/MainLayout.jsx (FINAL AND COMPLETE CODE)

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
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
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


      {/* Main Content Area (Now correct due to responsive fixes) */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3, 
          width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: theme.palette.background.default, 
          minHeight: '100vh', 
        }}
      >
        {/* Adds spacing equal to the Toolbar height (Header) */}
        <Toolbar /> 
        
        {/* Renders the specific page */}
        <Outlet /> 
      </Box>
    </Box>
  );
}