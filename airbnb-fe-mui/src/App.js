import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./components/Header";

import OptionsFilter from "./components/OptionsFilter";
import Container from "@mui/material/Container";
import LocationsCard from "./components/LocationsCard";
import Footer from "./components/Footer";
import MobileFooter from "./components/MobileFooter";
import FooterMenu from "./components/FooterMenu";
import { displayOnDesktop } from "./themes/commonStyles";
import AccomodationPage from "./pages/AccomodationPage";
import Home from "./pages/Home";


function App() {
  return (
    <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations/:id" element={<AccomodationPage />} />
        </Routes>
      
    </Router>
  );
}

export default App;
