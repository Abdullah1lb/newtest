import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Resetpass = () => {
  const [error, seterror] = useState({ status: false, msg: "", type: "" });
  const navigate = useNavigate();
  const Handler = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
    };
    if (actualData.email) {
      document.getElementById("form-data").reset();
      seterror({
        status: true,
        msg: "Email send successfully",
        type: "success",
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      seterror({
        status: true,
        msg: "Please provide valid email",
        type: "error",
      });
    }
  };
  return (
    <>
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
              type="email"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
            />

            <Box textAlign="center">
              {error.status ? (
                <Alert sx={{ mt: 2 }} severity={error.type}>
                  {error.msg}
                </Alert>
              ) : (
                ""
              )}
              <Button type="submit" variant="contained" sx={{ px: 2, mt: 3 }}>
                Send
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Resetpass;
