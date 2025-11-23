import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'leaflet/dist/leaflet.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Map from "./pages/TickSightings";
import Report from "./pages/Report";

const root = document.getElementById("root");

const theme = createTheme({
  palette: {
    primary: { main: '#f5f5f7' },
    secondary: { main: '#222831' },
    customBlue: { main: '#1976d2', contrastText: '#fff' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

ReactDOM.createRoot(root).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Map />}/>
        <Route path="/report" element={<Report />}/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
