import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Logo from "../components/Logo";
import LocationSearch from '../components/LocationSearch'
import ProfileSettings from "./ProfileSettings.js";


import {
  flexBetweenCenter,
  dFlex,
  displayOnDesktop
} from '../themes/commonStyles.js';
import MobileSearch from "./MobileSearch.js";

const Header = () => {
  return (

    <Box 
      sx={{
        ...dFlex,
        minHeight: 70,
        paddingBottom: 1,
        borderBottom: "1px solid #ddd",
      }}
    > 
    <Container maxWidth='xl'>
        <Box 
        sx={{
          ...flexBetweenCenter,
          minHeight: 70,
          px: 4
        }}>
             <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
          <Box sx={displayOnDesktop}>
            <LocationSearch />
          </Box>
          <Box sx={displayOnDesktop}>
            <ProfileSettings />
          </Box>
          
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <MobileSearch />
          </Box>          
        </Box>
    </Container>
      
      
      
    </Box>
  );
};

export default Header;
