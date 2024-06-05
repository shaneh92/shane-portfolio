import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
  useTheme,
} from "@mui/material";

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
          </Grid>
        </Grid>
        <Card>
          <CardContent>
            <Typography variant="h3" sx={{ color: palette.secondary.light }}>
              About Me
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
              ipsum sit amet mi convallis pharetra id
              <span style={wordHighlight}>laoreet erat</span>. Sed ac velit sit
              amet lorem suscipit placerat. Aliquam erat volutpat. Quisque
              sollicitudin massa id ipsum{" "}
              <span style={wordHighlight}>maximus consectetur</span> non eget
              nunc. Quisque gravida{" "}
              <span style={wordHighlight}>vestibulum</span> nisi fermentum
              laoreet. Nam elit tortor, accumsan eu dignissim eu, mollis id
              neque. Ut augue arcu, interdum sed ipsum ac, volutpat interdum
              nibh. Sed{" "}
              <span style={wordHighlight}>sagittis ullamcorper magna</span>, ac
              vulputate turpis pharetra nec. Proin et orci sollicitudin, egestas
              tellus et, volutpat nibh. Maecenas facilisis nunc dui, vel
              lobortis diam feugiat sed. Nunc et eros iaculis, posuere tellus
              non, faucibus tellus.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
