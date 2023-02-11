import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import pngegg from "../images/pngegg.png";
import { Grid, IconButton } from "@mui/material";
const pages = ["About", "Products", "Our Technology", "contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "transparent", px: "32px" }}
      elevation={0}
    >
      <Toolbar
        disableGutters
        sx={{ height: "128px", backgroundColor: "transparent" }}
      >
        <Grid container>
          <Grid item xs={6} sx={{ textAlign: "left" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography fontSize={25} fontWeight={700}>
                AGRO
              </Typography>

              <img
                src={pngegg}
                alt="Company Logo"
                style={{ width: "40px", height: "auto" }}
              />
              <Typography fontSize={25} fontWeight={700}>
                NEXUS
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "space-around",
                },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 4, color: "#fff", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ my: 3, color: "#fff" }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
