// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./AppProvider.jsx"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* AppProvider wraps the entire application with Theme, Router, and Contexts */}
    <AppProvider />
  </React.StrictMode>
);