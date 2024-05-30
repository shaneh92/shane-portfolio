import { useTheme, Paper, Container } from "@mui/material";
import ResponsiveAppBar from "./components/Header/Header.tsx";
import wireframebackground from "./assets/wireframebackground.png";
import "./App.css";

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
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <ResponsiveAppBar />
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </Container>
      </Paper>
    </>
  );
}

export default App;
