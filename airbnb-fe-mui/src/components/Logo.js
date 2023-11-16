import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Icone
import { FaAirbnb } from "react-icons/fa";
import { flexCenter } from "../themes/commonStyles"; //flex che mi sono creato
import { pink } from "@mui/material/colors";

const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
    <Box sx={flexCenter}>
      <FaAirbnb size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1, //margin left
          color: (theme) => theme.palette.secondary.main,
          fontSize: '20px',
          fontWeight: 'bold'
        }}
        component="h3"
      >airbnb</Typography>
    </Box>
    </Link>
  );
};

export default Logo;
