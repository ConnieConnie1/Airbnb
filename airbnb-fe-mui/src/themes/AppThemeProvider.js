import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, pink } from '@mui/material/colors';

// Stili personalizzati per Airbnb
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontSize: 15,
      textDecoration: "none"
    },
    h1: {
      fontSize: "2rem", // Adjust the size as needed
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.1rem", // Adjust the size as needed
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      
    },
  },

  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: pink[500],
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        sx: {
          px: 1,
        },
        variant: "subtitle2",
        textDecoration: "none",
      },
    },
    MuiStack: {
      defaultProps: {
        sx: {
          px: 2,
          py: 1,
        },
        spacing: 2,
        direction: "row",
      },
    },
    MuiPaper: {
        defaultProps: {
            elevation:0
        }
    },
    MuiLink: {
        defaultProps:{
            sx:{
                color: theme => theme.palette.primary.main
            },
            underline: 'none'
        }
    },
    MuiButton:{
        size: 'small',
        p: 0,
        disableRipple: true
    },
    variants: 'text', 
  },
  MuiTab: {
    defaultProps:{
        defaultProps:{
            disableRipple: 'true'
        }
    }
  }
});

const AppThemeProvider = (prop) => {
  return <ThemeProvider theme={theme}> {prop.children}</ThemeProvider>;
};

export default AppThemeProvider;
