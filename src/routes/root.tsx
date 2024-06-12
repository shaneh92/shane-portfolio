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
        }}
      >
        <Container
          sx={{
            backgroundImage: `url(${wireframebackground})`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            minHeight: "100%",
          }}
        >
          <Header />
          <Outlet />
        </Container>
      </Paper>
    </>
  );
}
