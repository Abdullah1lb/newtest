import { Box, Button, CssBaseline, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handler = () => {
    localStorage.setItem("login", 0);
    let login = localStorage.getItem("login");
    if (login != 1) {
      navigate("/login");
    }
  };
  return (
    <>
      <CssBaseline />
      <Grid container justifyContent="center">
        <Grid
          item
          sm={5}
          xs={6}
          sx={{ mt: 10, backgroundColor: "orange", p: 3 }}
        >
          <Typography variant="h5">Name: Abdullah Rehman</Typography>
          <Typography variant="h5">Email: abcdefc@gmail.com</Typography>
          <Box>
            <Button
              sx={{ mt: 1, mr: 2 }}
              onClick={handler}
              variant="contained"
              color="primary"
            >
              Logout
            </Button>{" "}
            <Button
              sx={{ mt: 1, mr: 2 }}
              onClick={() => {
                navigate("/");
              }}
              variant="contained"
              color="primary"
            >
              Home
            </Button>
            <NavLink to="/changepass">Change Password?</NavLink>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
