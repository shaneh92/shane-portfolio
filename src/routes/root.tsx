import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Container, Paper, useTheme } from "@mui/material";
import wireframebackground from "/wireframebackground.png";

export function Root() {
  const { typography, palette } = useTheme();
  return (
    <>
      <Paper
        sx={{
          fontFamily: typography.fontFamily,
          background: `radial-gradient(circle at center, ${palette.primary.light}, ${palette.primary.main})`,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container
          sx={{
            background: `url(${wireframebackground})`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            height: "0",
            flexGrow: 1,
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              display: "none", // Hide scrollbar for Chrome, Safari, and newer Edge
            },
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            msOverflowStyle: "none", // Hide scrollbar for IE 10+
          }}
        >
          <Header />
          <Outlet />
        </Container>
      </Paper>
    </>
  );
}
