import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Changepass = () => {
  const [error, seterror] = useState({ status: false, msg: "", type: "" });
  const navigate = useNavigate();
  const Handler = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      cpassword: data.get("cpassword"),
    };
    if (actualData.password && actualData.cpassword) {
      document.getElementById("form-data").reset();
      if (actualData.password === actualData.cpassword) {
        seterror({
          status: true,
          msg: "Password set successfully",
          type: "success",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        seterror({
          status: true,
          msg: "Password doest not matched",
          type: "error",
        });
      }
    } else {
      seterror({
        status: true,
        msg: "All fields are required",
        type: "error",
      });
    }
  };
  return (
    <>
      <Typography variant="h4" color="secondary" sx={{ mt: 5, ml: 45 }}>
        Change Password
      </Typography>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
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
              type="password"
              required
              fullWidth
              id="password"
              name="password"
              label="New Password"
            />
            <TextField
              margin="normal"
              type="password"
              required
              fullWidth
              id="cpassword"
              name="cpassword"
              label="New Confirm Password"
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
                Save
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Changepass;
