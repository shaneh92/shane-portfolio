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
import shaneResume from "../../assets/shane-hingtgen-resume2025.pdf";

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
                color: palette.secondary.dark,
                textTransform: "capitalize",
              }}
            >
              About Me
            </Typography>
            <Typography variant="body1">
              Certified in <span style={wordHighlight}>CompTIA Security+</span>,
              with expertise in developing interactive web applications using{" "}
              <span style={wordHighlight}>React</span> and{" "}
              <span style={wordHighlight}>TypeScript</span> to create robust,
              scalable, and maintainable solutions. Skilled in translating Figma
              designs into functional user interfaces, implementing custom
              theming, field validators, and intuitive form layouts to enhance
              user experience. Proficient in debugging and resolving issues
              within Azure DevOps and writing comprehensive test cases with
              Vitest to ensure software reliability.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
