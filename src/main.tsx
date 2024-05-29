import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ResponsiveAppBar from "./components/Header/Header.tsx";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import wireframebackground from "./assets/wireframebackground.png";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Container
    sx={{
      backgroundImage: `090808`,
      foreground: "1F1E1E",
    }}
  >
    <React.StrictMode>
      <Box
        sx={{
          backgroundImage: `url(${wireframebackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <ResponsiveAppBar />
        <App />
      </Box>
    </React.StrictMode>
  </Container>
);
