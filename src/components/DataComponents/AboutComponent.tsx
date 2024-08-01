import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import shaneResume from "../../assets/shane-hingtgen-resume2024.pdf";

interface AboutComponentProps {
  image: string;
  name: string;
  title: string;
  email: string;
}

export default function AboutComponent(props: AboutComponentProps) {
  const { palette } = useTheme();
  const wordHighlight = {
    color: palette.secondary.dark,
  };

  return (
    <>
      <Box>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Avatar
              src={props.image}
              alt={props.name}
              sx={{
                height: "200px",
                width: "200px",
                border: `5px solid ${palette.secondary.dark}`,
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h1" sx={{ color: palette.secondary.dark }}>
              {props.name}
            </Typography>
            <Typography variant="h1" sx={{ color: palette.secondary.light }}>
              {props.title}
            </Typography>
            <Link
              href={`mailto:${props.email}`}
              variant="h5"
              style={{ color: "#007BFF", textDecoration: "none" }}
            >
              {props.email}
            </Link>
            <Box sx={{ marginTop: "1em" }}>
              <Button
                href={shaneResume}
                variant="contained"
                target="_blank"
                sx={{
                  backgroundColor: palette.secondary.main,
                  color: palette.secondary.dark,
                }}
              >
                Download Resume
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Card>
          <CardContent>
            <Typography
              variant="h3"
              sx={{
                color: palette.secondary.light,
                textTransform: "capitalize",
              }}
            >
              About Me
            </Typography>
            <Typography variant="body1">
              Motivated entry-level software developer with a focus on{" "}
              <span style={wordHighlight}>Front-End Development</span>, adept at
              crafting intuitive user interfaces. Eager to expand knowledge and
              skills, I bring enthusiasm and dedication to collaborative team
              environments. Actively engaged in freelance projects with a strong
              commitment to maintaining clean and efficient code practices.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
