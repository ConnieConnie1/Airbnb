import React from "react";
import {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../App.css";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "../components/Header";

import OptionsFilter from "../components/OptionsFilter";
import Container from "@mui/material/Container";
import LocationsCard from "../components/LocationsCard";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import FooterMenu from "../components/FooterMenu";
import { displayOnDesktop } from "../themes/commonStyles";
import AccomodationPage from "../pages/AccomodationPage";

function Home() {
  const [accomodations, setAccomodations] = useState([]); 

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
          <OptionsFilter setAccomodations={setAccomodations}/>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            overflowY: "scroll",
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationsCard accomodations={accomodations}/>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <MobileFooter />
            </Box>
          </Container>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Home;
