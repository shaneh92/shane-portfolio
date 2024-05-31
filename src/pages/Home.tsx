import { Box, Container, Grid, Typography } from "@mui/material";
import SkillsComponent from "../components/DataComponents/SkillComponent";
import { skillList } from "../data/skillList";
import arrow from "../assets/arrow.png";
import shanePhoto from "../assets/shane-photo.png";

export default function Home() {
  const wordHighlight = {
    color: "#41FFC9",
  };
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
            <Typography variant="h1">Shane Hingtgen,</Typography>
            <Typography variant="h2">
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
                Shane is a <span style={wordHighlight}>seasoned</span> software
                developer specializing in{" "}
                <span style={wordHighlight}>Angular JavaScript</span>. With over
                two years experience, Shane excels in creating{" "}
                <span style={wordHighlight}>
                  responsive, user-centric applications
                </span>
                . Known for his team-oriented approach and precise task
                management, he is a key asset to any project, driving digital
                innovation with robust and{" "}
                <span style={wordHighlight}>scalable</span> Angular solutions.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} md={4} order={{ xs: 1, md: 2 }}>
            <img
              src={shanePhoto}
              alt="check this guy out"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: "100px" }}>
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
    </>
  );
}
