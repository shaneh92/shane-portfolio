import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import SkillsComponent from "../components/DataComponents/SkillComponent";
import { skillList } from "../data/skillList";
import arrow from "../assets/arrow.png";
import shanePhoto from "../assets/shane-photo.png";
import QuickLinksComponent from "../components/DataComponents/QuickLinksComponent";

export default function Home() {
  const { palette } = useTheme();
  const wordHighlight = {
    color: palette.secondary.dark,
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
          <Typography variant="h1" sx={{ color: palette.secondary.dark }}>
            Shane Hingtgen,
          </Typography>
          <Typography variant="h1" sx={{ color: palette.secondary.light }}>
            <img
              src={arrow}
              alt="right arrow"
              style={{
                width: "25px",
                verticalAlign: "middle",
                padding: "5px",
              }}
            />
            Software Developer
          </Typography>
          <Box
            sx={{
              margin: "20px 0 130px 0",
            }}
          >
            <Typography
              variant="body1"
              sx={{ mr: "65px", textAlign: "justify" }}
            >
              Shane is a <span style={wordHighlight}>Software Engineer</span>{" "}
              specializing in{" "}
              <span style={wordHighlight}>Front-End Development</span>. Shane
              excels in creating{" "}
              <span style={wordHighlight}>
                responsive, user-centric applications
              </span>
              . Known for his team-oriented approach and precise task
              management, he is a key asset to any project, driving digital
              innovation with robust and scalable{" "}
              <span style={wordHighlight}>Angular</span> &{" "}
              <span style={wordHighlight}>React</span> solutions.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} md={4} order={{ xs: 1, md: 2 }}>
          <Box display="flex" justifyContent="flex-end">
            <img
              src={shanePhoto}
              alt="check this guy out"
              style={{ maxWidth: "95%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid>
        <QuickLinksComponent />
      </Grid>

      <Box sx={{ mt: "102px", mb: "50px" }}>
        <Grid container spacing={2}>
          {skillList.map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <SkillsComponent
                key={index}
                image={skill.image}
                title={skill.title}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
