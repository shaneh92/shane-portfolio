import { useTheme, Paper, Container } from "@mui/material";
import ResponsiveAppBar from "./components/Header/Header.tsx";
import wireframebackground from "../public/wireframebackground.png";
import "./App.css";
import Home from "./pages/Home.tsx";

function App() {
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
          <ResponsiveAppBar />
          <Home />
        </Container>
      </Paper>
    </>
  );
}

export default App;
