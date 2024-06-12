import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import dropdown from "../../assets/dropdown.png";
import logo from "../../assets/sh-logo.png";
import HeaderLinkItem from "./HeaderLinkItem";
import { Link, Typography, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const pages = ["Home", "Resume", "Projects", "Databases", "API", "About"];

function Header() {
  const { palette } = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none", mb: "95px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={logo}
            alt="logo"
            style={{ height: "30px", width: "30px", marginRight: "60px" }}
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              mr: "auto",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <img
                src={dropdown}
                alt="menu"
                style={{ height: "30px", width: "30px" }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: palette.primary.main,
                  borderRadius: "12px",
                },
              }}
            >
              <Box display="flex" alignItems="center" sx={{ margin: "20px" }}>
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    height: "30px",
                    width: "30px",
                    marginRight: "15px",
                    marginLeft: "10px",
                  }}
                />
                <Typography variant="h4">Shane Hingtgen</Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: palette.secondary.main,
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      padding: "20px",
                      pl: "30px",
                      "&:hover": {
                        backgroundColor: palette.primary.main,
                      },
                    }}
                  >
                    <HeaderLinkItem to={`/${page}`} title={page} />
                  </MenuItem>
                ))}
              </Box>
              <Box display="flex" alignItems="center" sx={{ margin: "20px" }}>
                <Link
                  href="https://github.com/shaneh92"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <Box display="flex" alignItems="center" sx={{ mr: "25px" }}>
                    <GitHubIcon
                      sx={{ color: "white", mr: "10px", fontSize: 40 }}
                    />
                    <Typography variant="h4"> Github</Typography>
                  </Box>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shane-hingtgen/ "
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <Box display="flex" alignItems="center">
                    <LinkedInIcon
                      sx={{ color: "white", mr: "10px", fontSize: 40 }}
                    />
                    <Typography variant="h4">LinkedIn </Typography>
                  </Box>
                </Link>
              </Box>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                variant="text"
                sx={{
                  "&:hover": {
                    backgroundColor: palette.secondary.main,
                  },
                }}
              >
                <HeaderLinkItem to={`/${page}`} title={page} key={page} />
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
