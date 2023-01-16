import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box>
        <AppBar color="secondary" sx={{ flexGrow: 1, position: "sticky" }}>
          <Toolbar>
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              Authentication System
            </Typography>
            <Button
              component={NavLink}
              to="/"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "green" : "" };
              }}
              sx={{ color: "white" }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/contact"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "green" : "" };
              }}
              sx={{ color: "white" }}
            >
              Contact
            </Button>
            {localStorage.getItem("login") == 1 ? (
              <Button
                component={NavLink}
                to="/login"
                onClick={() => {
                  localStorage.setItem("login", 0);
                }}
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "green" : "" };
                }}
                sx={{ color: "white" }}
              >
                Logout
              </Button>
            ) : (
              <Button
                component={NavLink}
                to="/login"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "green" : "" };
                }}
                sx={{ color: "white" }}
              >
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
