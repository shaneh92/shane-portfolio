import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#090808",
      light: "#1F1E1E",
    },
    secondary: {
      main: "#13211D",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontFamily: "Montserrat",
      color: "#41FFC9",
      fontSize: "50px",
      fontWeight: 500,
    },
    h2: {
      fontFamily: "Montserrat",
      color: "#ffffff",
      fontSize: "50px",
      fontWeight: 500,
    },
    h3: {
      fontFamily: "Montserrat",
      color: "#41FFC9",
      textTransform: "uppercase",
      fontSize: "20px",
    },
    h4: {
      fontFamily: "Montserrat",
      color: "#ffffff",
      fontSize: "15px",
      fontWeight: 200,
    },
    h5: {
      fontFamily: "Montserrat",
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
});
