import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#090808",
      light: "#1F1E1E",
    },
    secondary: {
      main: "#13211D",
      light: "#ffffff",
      dark: "#41FFC9",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontFamily: "Montserrat",
      fontSize: "50px",
      fontWeight: 500,
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "50px",
      fontWeight: 500,
    },
    h3: {
      fontFamily: "Montserrat",
      textTransform: "uppercase",
      fontSize: "22px",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Montserrat",
      color: "#ffffff",
      fontSize: "18px",
      fontWeight: 450,
    },
    h5: {
      fontFamily: "Montserrat",
      color: "#ffffff",
      fontSize: "31px",
      fontWeight: 200,
    },
    h6: {
      fontFamily: "Montserrat",
    },
    subtitle1: {
      fontFamily: "Montserrat",
      color: "#41FFC9",
    },
    subtitle2: {
      fontFamily: "Montserrat",
    },
    button: {
      fontFamily: "Montserrat",
    },
    body1: {
      fontFamily: "Montserrat",
      color: "#ffffff",
      fontSize: "20px",
      fontWeight: 200,
    },
    body2: {
      fontFamily: "Montserrat",
      color: "#41FFC9",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#13211D",
          borderRadius: "5px",
          boxShadow: "0 0 16px rgba(0, 0, 0, 0.7)",
          marginTop: "50px",
          marginBottom: "50px",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: "0px",
          paddingBottom: "0px",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "20px",
        },
      },
    },
  },
});
