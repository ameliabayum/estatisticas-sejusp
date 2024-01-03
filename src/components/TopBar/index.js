import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../imgs/horizontal_verde_solo_logo.png";
import Container from "@mui/material/Container";
import LogoCanto from "../../imgs/logo_acre.png";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Outlet } from "react-router-dom";
import Brasoes from "../../imgs/vertical_verde_solo.png";
import "./index.css"
export default function TopBar() {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundImage: `url(${LogoCanto})`,
          backgroundColor: "white",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <img src={Logo} width={200} />
            </Box>
            <Typography
              variant="h5"
              sx={{
                ml: 4,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 600,
                color: "#048d3e",
              }}
            >
              SECRETARIA DE ESTADO E SEGURANÇA PÚBLICA
            </Typography>

            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            ></Box>
            <Typography
              variant="h5"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={Logo} width={200} />
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />

      <Box my={2} sx={{textAlign:"center"}}>
        <div className="navbar-top"></div>
        <Typography variant="h6" color={"#3D3D3D"}> SECRETARIA DE ESTADO E SEGURANÇA PÚBLICA DO ESTADO DO ACRE</Typography>
      </Box>
    </>
  );
}
