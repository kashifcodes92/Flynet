// src/pages/Auth/SuperAdminLogin.jsx

import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import AuthLayout from "../../layouts/AuthLayout.jsx"; 

export default function SuperAdminLogin() {
  const [email, setEmail] = useState("test@admin.com");
  const [password, setPassword] = useState("******");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password); 
  };

  return (
    <AuthLayout>
      <Box sx={{ maxWidth: 400, width: "100%", textAlign: "left", p: 4, border: '1px solid #EEE', borderRadius: 2 }}>
        <Typography component="h1" variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Welcome!
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 3 }}>
          Login to your Super admin
        </Typography>

        <Button variant="outlined" startIcon={<LoginIcon />} fullWidth sx={{ mb: 3, textTransform: 'none' }}>
          Log in with QR code
        </Button>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: "100%" }}>
          <TextField
            label="User name"
            placeholder="test@gmail.com"
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
          
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3, textTransform: 'none', backgroundColor: '#1C2536' }}>
            Login
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