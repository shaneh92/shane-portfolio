import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Grid, Link, Typography } from "@mui/material";

export default function IconLinks() {
  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <Link
          href="https://github.com/shaneh92"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <GitHubIcon sx={{ color: "white", mr: "10px", fontSize: 40 }} />
          <Typography variant="h4" sx={{ color: "white" }}>
            Github
          </Typography>
        </Link>
      </Grid>
      <Grid item>
        <Link
          href="https://www.linkedin.com/in/shane-hingtgen/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <LinkedInIcon sx={{ color: "white", mr: "10px", fontSize: 40 }} />
          <Typography variant="h4" sx={{ color: "white" }}>
            LinkedIn
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
}
