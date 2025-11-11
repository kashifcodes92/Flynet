// src/pages/Auth/SuperAdminLogin.jsx (FINAL CODE WITH CONDITIONAL QR)

import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Select, 
  MenuItem // <-- New Import for Role Selection
} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import AuthLayout from "../../layouts/AuthLayout.jsx"; 

export default function SuperAdminLogin() {
  const [email, setEmail] = useState("test@admin.com");
  const [password, setPassword] = useState("******");
  const [loading, setLoading] = useState(false); // To prevent double clicks
  
  // CRITICAL FIX: State to manage the user role context for the form
  const [userType, setUserType] = useState('SUPER_ADMIN'); 
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // CRITICAL: Pass the intended role to the login function for context storage
    await login(email, password, userType); 
    setLoading(false);
  };

  const isQrVisible = userType === 'TENANT_ADMIN'; // QR code visibility rule

  return (
    <AuthLayout>
      <Box 
        sx={{ 
            maxWidth: 400, 
            width: "100%", 
            textAlign: "left", 
            p: 4, 
            border: '1px solid #EEE', 
            borderRadius: 2,
            backgroundColor: 'white',
            boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)'
        }}
      >
        <Typography component="h1" variant="h5" fontWeight="bold" align="center" sx={{ mb: 2 }}>
          Welcome!
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" align="center" sx={{ mb: 3 }}>
          Login to your Super admin
        </Typography>

        {/* --- Role Selector (Temporarily replacing QR button for testing) --- */}
        <TextField
            select
            label="Login As"
            fullWidth
            margin="normal"
            size="small"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            sx={{ mb: 1 }}
        >
            <MenuItem value="SUPER_ADMIN">Super Admin (System)</MenuItem>
            <MenuItem value="TENANT_ADMIN">Tenant Admin (Site)</MenuItem>
        </TextField>
        
        {/* --- QR CODE LOGIN BUTTON (Conditional Rendering Fix) --- */}
        {isQrVisible && (
            <Button variant="outlined" startIcon={<LoginIcon />} fullWidth sx={{ mb: 3, textTransform: 'none', borderColor: '#CCC' }}>
                Log in with QR code
            </Button>
        )}
        
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: "100%" }}>
          <TextField
            label="User name"
            placeholder="test@admin.com"
            fullWidth
            margin="normal"
            size="medium"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            size="medium"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel control={<Checkbox size="small" />} label="Remember Me" sx={{ mt: 1 }} />
          
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            size="large"
            disabled={loading}
            sx={{ mt: 3, textTransform: 'none', backgroundColor: '#1C2536' }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </Box>
        
        <Box sx={{ mt: 2, width: "100%", display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2">
                <a href="#">Forgot Password?</a>
            </Typography>
            <Typography variant="body2">
                Not yet registered? <a href="/register">Register Now</a>
            </Typography>
        </Box>
      </Box>
    </AuthLayout>
  );
}