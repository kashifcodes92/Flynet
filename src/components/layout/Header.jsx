//src/components/layout/Header.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Typography,
  Select,
  FormControl,
  useTheme,
  Stack,
  Divider,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Header = ({ drawerWidth, handleDrawerToggle }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();

  // === Language Selector Data ===
  const languages = [
    { code: "en-US", name: "EN-US", image: "/US-flag.png" },
    { code: "es", name: "ES", image: "/flag-es.png" },
    { code: "pt-BR", name: "PT-BR", image: "/flag-br.png" },
  ];

  const [language, setLanguage] = useState("en-US");
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    handleMenuClose();
    logout();
  };

  const handleProfileClick = () => {
    handleMenuClose();
    navigate("/user/profile");
  };

  // === Profile Menu ===
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        elevation: 2,
        sx: {
          borderRadius: 3,
          mt: 1,
          minWidth: 220,
        },
      }}
    >
      {/* Signed in as */}
      <Box sx={{ px: 2, py: 1.5 }}>
        <Typography variant="body2" color="text.secondary">
          Signed in as
        </Typography>
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{ color: theme.palette.text.primary }}
        >
          {user?.name || "Super Admin"}
        </Typography>
      </Box>

      <Divider />

      <MenuItem onClick={handleProfileClick}>
        <PersonIcon fontSize="small" sx={{ mr: 1, color: "black" }} />
        Profile
      </MenuItem>

      <MenuItem onClick={handleLogout}>
        <LogoutIcon fontSize="small" sx={{ mr: 1, color: "black" }} />
        Sign Out
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 2,

        /* --- TRANSPARENT GLASS HEADER (Figma Style) --- */
        backgroundColor: "rgba(255,255,255,0.20)",  // light transparent
        backdropFilter: "blur(12px)",               // blur effect
        WebkitBackdropFilter: "blur(12px)",

        boxShadow: "0 4px 12px rgba(0,0,0,0.12)",   // soft shadow
        borderBottom: "1px solid rgba(255,255,255,0.3)",

        color: "black",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          [theme.breakpoints.up("sm")]: { ml: `${drawerWidth}px` },
          minHeight: "70px",
        }}
      >
        {/* --- Logo --- */}
        <img
          src="/flynet-logo.png"
          alt="flynet Logo"
          onClick={() => navigate("/")}
          style={{
            height: 36,
            position: "absolute",
            left: -210,
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        />

        {/* Left Side (Hamburger) */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <IconButton
            color="inherit"
            sx={{
              mr: 2,
              display: { sm: "none" },
              color: theme.palette.primary.main,
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* === RIGHT SIDE CONTROLS === */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.8 }}>
          {/* Language Selector */}
          <FormControl size="small">
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              sx={{
                fontWeight: "bold",
                backgroundColor: "rgba(255,255,255,0.6)",
                borderRadius: 3,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0,0,0,0.2)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.primary.main,
                },
              }}
              renderValue={(selected) => {
                const lang = languages.find((l) => l.code === selected);
                return (
                  <Stack direction="row" spacing={1} alignItems="center">
                    <img
                      src={lang.image}
                      alt={lang.name}
                      style={{ width: 20, height: 14 }}
                    />
                    <Typography>{lang.name}</Typography>
                  </Stack>
                );
              }}
            >
              {languages.map((lang) => (
                <MenuItem key={lang.code} value={lang.code}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <img
                      src={lang.image}
                      alt={lang.name}
                      style={{ width: 20, height: 14 }}
                    />
                    <Typography>{lang.name}</Typography>
                  </Stack>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Notifications */}
          <IconButton
            onClick={() => navigate("/admin/notifications")}
            sx={{ "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" } }}
          >
            <Badge badgeContent={3} color="error">
              <NotificationsIcon style={{ color: "black" }} />
            </Badge>
          </IconButton>

          {/* Profile Icon */}
          <IconButton
            onClick={handleProfileMenuOpen}
            sx={{ "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" } }}
          >
            <AccountCircle sx={{ color: "black" }} />
          </IconButton>

          {/* Logout Button */}
          <IconButton
            onClick={logout}
            sx={{
              backgroundColor: "#ff4d4f",
              color: "white",
              "&:hover": { backgroundColor: "#e53935" },
            }}
          >
            <LogoutIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {renderMenu}
    </AppBar>
  );
};

export default Header;
