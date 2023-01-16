import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, seterror] = useState({ status: false, msg: "", type: "" });
  const navigate = useNavigate();
  const Handler = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      document.getElementById("form-data").reset();
      seterror({ status: true, msg: "Login Successful", type: "success" });

      localStorage.setItem("login", 1);
      let login = localStorage.getItem("login");
      if (login == 1) {
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } else {
      seterror({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };
  // useEffect(() => {

  // }, []);

  return (
    <>
      <Box
        component="form"
        id="form-data"
        noValidate
        mt={2}
        p={2}
        onSubmit={Handler}
      >
        <TextField
          margin="normal"
          type="email"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
        />
        <TextField
          margin="normal"
          type="password"
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
        />
        <Box>
          <NavLink to="/reset">Forget Password?</NavLink>
          <Box textAlign="center">
            <Button type="submit" variant="contained" sx={{ px: 2, mt: 3 }}>
              Login
            </Button>
          </Box>
        </Box>
        {error.status ? (
          <Alert sx={{ mt: 2 }} severity={error.type}>
            {error.msg}
          </Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Login;
