// src/AppProvider.jsx

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/system'; 
import theme from './theme.js';
import { AuthProvider } from './context/AuthContext.jsx'; 
import App from './App.jsx'; 

// Global Styles to ensure the app occupies the full viewport height
const globalStyles = (
  <GlobalStyles styles={{
    html: { height: '100%' },
    body: { height: '100%', margin: 0, padding: 0 },
    '#root': { height: '100%' }
  }} />
);

const AppProvider = () => {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      {/* BrowserRouter is moved here to ensure it wraps AuthProvider, 
          as AuthProvider uses hooks that depend on the router. */}
      <BrowserRouter>
        <AuthProvider>
          {/* App is rendered last, after all contexts are initialized */}
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppProvider;