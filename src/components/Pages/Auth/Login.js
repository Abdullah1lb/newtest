import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  // const [error, seterror] = useState({ status: false, msg: "", type: "" });
  const navigate = useNavigate();
  // const Handler = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.currentTarget);
  //   const actualData = {
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   };
  //   if (actualData.email && actualData.password) {
  //     document.getElementById("form-data").reset();
  //     seterror({ status: true, msg: "Login Successful", type: "success" });

  //     localStorage.setItem("login", 1);
  //     let login = localStorage.getItem("login");
  //     if (login == 1) {
  //       setTimeout(() => {
  //         navigate("/dashboard");
  //       }, 1000);
  //     }
  //   } else {
  //     seterror({ status: true, msg: "All Fields are Required", type: "error" });
  //   }
  // };
  // useEffect(() => {

  // }, []);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      localStorage.setItem("login", 1);
      let login = localStorage.getItem("login");
      if (login == 1) {
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Please enter Valid email").required(),
      password: Yup.string().required().min(5).max(20),
    }),
  });

  return (
    <>
      <Box
        component="form"
        id="form-data"
        noValidate
        mt={2}
        p={2}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          margin="normal"
          type="email"
          fullWidth
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          label="Email Address"
        />
        {formik.touched.email && formik.errors.email ? (
          <Alert severity="error">{formik.errors.email}</Alert>
        ) : null}
        <TextField
          margin="normal"
          type="password"
          required
          fullWidth
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          label="Password"
        />
        {formik.touched.password && formik.errors.password ? (
          <Alert severity="error">{formik.errors.password}</Alert>
        ) : null}
        <Box>
          <NavLink to="/reset">Forget Password?</NavLink>
          <Box textAlign="center">
            <Button
              disabled={!formik.dirty}
              type="submit"
              variant="contained"
              sx={{ px: 2, mt: 3 }}
            >
              Login
            </Button>
          </Box>
          {formik.isSubmitting ? (
            <Alert severity="success">Login Successful</Alert>
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export default Login;
