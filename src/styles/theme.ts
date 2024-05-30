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
      color: "41FFC9",
    },
    h2: {
      fontFamily: "Montserrat",
      color: "white",
    },
    h3: {
      fontFamily: "Montserrat",
      color: "white",
      textTransform: "uppercase",
    },
    h4: {
      fontFamily: "Montserrat",
    },
    h5: {
      fontFamily: "Montserrat",
    },
    h6: {
      fontFamily: "Montserrat",
    },
    subtitle1: {
      fontFamily: "Montserrat",
    },
    subtitle2: {
      fontFamily: "Montserrat",
    },
    button: {
      fontFamily: "Montserrat",
    },
    body1: {
      fontFamily: "Montserrat",
      color: "ffffff",
    },
    body2: {
      fontFamily: "Montserrat",
      color: "#41FFC9",
    },
  },
});
