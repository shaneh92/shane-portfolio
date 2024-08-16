import { Box, Card, CardContent, Grid, useTheme } from "@mui/material";
import ProjectComponents from "../components/ProjectComponents/ProjectComponents";
import { projects } from "../data/projects";
import ProjectButtons from "../components/ProjectComponents/ProjectButtons";
import CompleteIcon from "../components/ProjectComponents/CompleteIcon";

export default function Projects() {
  const { palette } = useTheme();
  return (
    <Box sx={{ mb: "5em" }}>
      <Grid container spacing={4}>
        {projects.map((item, index) => (
          <Grid item xs={12} md={6} key={`${item.projectName}-${index}`}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                backgroundColor: palette.secondary.main,
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  margin: "15px",
                }}
              >
                <CompleteIcon {...item} />
                <ProjectComponents {...item} />
                <Box sx={{ marginTop: "auto" }}>
                  <ProjectButtons {...item} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
