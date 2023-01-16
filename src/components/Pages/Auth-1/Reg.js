import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reg = () => {
  const [error, seterror] = useState({ status: false, msg: "", type: "" });
  const navigate = useNavigate();
  const Handler = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      name: data.get("name"),
      password: data.get("password"),
      cpassword: data.get("cpassword"),
      tc: data.get("tc"),
    };
    if (
      actualData.name &&
      actualData.email &&
      actualData.password &&
      actualData.cpassword &&
      actualData.tc !== null
    ) {
      if (actualData.password === actualData.cpassword) {
        document.getElementById("form-data").reset();
        seterror({ status: true, msg: "Sign Up Successful", type: "success" });
        localStorage.setItem("login", 0);
        let login = localStorage.getItem("login");
        if (login != 1) {
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        }
      } else {
        seterror({
          status: true,
          msg: "Password Does not Machted",
          type: "error",
        });
      }
    } else {
      seterror({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };
  return (
    <>
      <Box
        component="form"
        id="form-data"
        noValidate
        mt={1}
        p={2}
        onSubmit={Handler}
      >
        <TextField
          margin="normal"
          type="text"
          required
          fullWidth
          id="name"
          name="name"
          label="Name"
        />
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
        <TextField
          margin="normal"
          type="password"
          required
          fullWidth
          id="cpassword"
          name="cpassword"
          label="Confirm Password"
        />
        <Box>
          <FormControlLabel
            control={
              <Checkbox name="tc" id="tc" value="agree" color="primary" />
            }
            label="I Agree to terms and Condition"
          />
          {error.status ? (
            <Alert sx={{ mt: 2 }} severity={error.type}>
              {error.msg}
            </Alert>
          ) : (
            ""
          )}
          <Box textAlign="center">
            <Button type="submit" variant="contained" sx={{ px: 2, mt: 3 }}>
              Signup
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Reg;
