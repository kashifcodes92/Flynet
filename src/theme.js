// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { 
        main: "#1C2536", 
    },
    secondary: { 
        main: "#00C8FF", 
    },
    background: { 
        default: "#F7F7F7", 
    },
  }
});

export default theme;