import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
// import { FooterLinks } from "./FooterLinks";
import logo from "../../assets/sh-logo.png";
import HeaderLinkItem from "../Header/HeaderLinkItem";
import IconLinks from "../Header/IconLinks";

export function Footer() {
  const { palette, typography } = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: palette.secondary.main,
        position: "relative",
        padding: "1em",
      }}
    >
      <Grid container spacing={2}>
        {/* Logo */}
        <Grid item xs={12} sm={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ height: "30px", width: "30px", marginRight: "20px" }}
            />
          </Box>
        </Grid>

        {/* About Column */}
        <Grid item xs={12} sm={3}>
          <Typography
            variant="body1"
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            About
          </Typography>
          <Grid
            container
            spacing={1}
            sx={{ textAlign: { xs: "center", sm: "left" } }}
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            <Grid item xs={12}>
              <HeaderLinkItem to="/home" title="Home" />
            </Grid>
            <Grid item xs={12}>
              <HeaderLinkItem disabled to="/about" title="About" />
            </Grid>
            <Grid item xs={12}>
              <HeaderLinkItem to="/resume" title="Resume" />
            </Grid>
          </Grid>
        </Grid>

        {/* Work Column */}
        <Grid item xs={12} sm={3}>
          <Typography
            variant="body1"
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            Work
          </Typography>
          <Grid
            container
            spacing={1}
            sx={{ textAlign: { xs: "center", sm: "left" } }}
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            <Grid item xs={12}>
              <HeaderLinkItem disabled to="/api" title="API" />
            </Grid>
            <Grid item xs={12}>
              <HeaderLinkItem disabled to="/projects" title="Projects" />
            </Grid>
            <Grid item xs={12}>
              <HeaderLinkItem disabled to="/databases" title="Databases" />
            </Grid>
          </Grid>
        </Grid>

        {/* Button and Icons */}
        <Grid item xs={12} sm={3}>
          <Box sx={{ textAlign: { xs: "center", sm: "right" } }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: palette.secondary.dark,
                color: palette.secondary.main,
                fontFamily: typography.h6,
                textTransform: "none",
                marginBottom: "1em",
              }}
            >
              Schedule a meeting
            </Button>
            <IconLinks />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
