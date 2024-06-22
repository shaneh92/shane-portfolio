import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";

import dropdown from "../../assets/dropdown.png";
import logo from "../../assets/sh-logo.png";

import { Typography, useTheme } from "@mui/material";

import { MenuItems } from "./MenuItems";
import HeaderLinks from "./HeaderLinks";
import IconLinks from "./IconLinks";

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
                  width: "300px",
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
              <MenuItems />
              <Box
                sx={{
                  margin: "20px",
                }}
              >
                <IconLinks />
              </Box>
            </Menu>
          </Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <img
              src={dropdown}
              alt="menu"
              style={{ height: "30px", width: "30px" }}
            />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <HeaderLinks />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
