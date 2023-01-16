import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reg = () => {
  //   const [error, seterror] = useState({ status: false, msg: "", type: "" });
  const navigate = useNavigate();
  //   const Handler = (e) => {
  //     e.preventDefault();
  //     const data = new FormData(e.currentTarget);
  //     const actualData = {
  //       email: data.get("email"),
  //       name: data.get("name"),
  //       password: data.get("password"),
  //       cpassword: data.get("cpassword"),
  //       tc: data.get("tc"),
  //     };
  //     if (
  //       actualData.name &&
  //       actualData.email &&
  //       actualData.password &&
  //       actualData.cpassword &&
  //       actualData.tc !== null
  //     ) {
  //       if (actualData.password === actualData.cpassword) {
  //         document.getElementById("form-data").reset();
  //         seterror({ status: true, msg: "Sign Up Successful", type: "success" });
  //         localStorage.setItem("login", 0);
  //         let login = localStorage.getItem("login");
  //         if (login != 1) {
  //           setTimeout(() => {
  //             navigate("/login");
  //           }, 1000);
  //         }
  //       } else {
  //         seterror({
  //           status: true,
  //           msg: "Password Does not Machted",
  //           type: "error",
  //         });
  //       }
  //     } else {
  //       seterror({ status: true, msg: "All Fields are Required", type: "error" });
  //     }
  // };

  const radioOps = [
    { key: "opt1", value: "Male" },
    { key: "opt2", value: "Female" },
    { key: "opt3", value: "Other" },
  ];
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      tc: false,
      radio: "",
    },
    onSubmit: (values) => {
      console.log(values);

      localStorage.setItem("login", 0);
      let login = localStorage.getItem("login");
      if (login != 1) {
        setTimeout(() => {
          formik.resetForm();
          navigate("/login");
        }, 1000);
      }
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email("Email is Invalid").required(),
      password: Yup.string().required("Password is Required").min(5, "weak"),
      cpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password is Required"),
      tc: Yup.bool().isTrue("Please accept terms and conditions"),
      radio: Yup.string().required("Gender is required"),
    }),
  });
  return (
    <>
      <Box
        component="form"
        id="form-data"
        noValidate
        mt={1}
        p={2}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          margin="normal"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          fullWidth
          id="name"
          name="name"
          label="Name"
        />
        {formik.touched.name && formik.errors.name ? (
          <Alert severity="error">{formik.errors.name}</Alert>
        ) : null}
        <TextField
          margin="normal"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          fullWidth
          id="email"
          name="email"
          label="Email Address"
        />
        {formik.touched.email && formik.errors.email ? (
          <Alert severity="error">{formik.errors.email}</Alert>
        ) : null}
        <TextField
          margin="normal"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          fullWidth
          id={`password`}
          name="password"
          label="Password"
        />
        {formik.touched.password && formik.errors.password ? (
          <Alert severity="error">{formik.errors.password}</Alert>
        ) : null}
        <TextField
          margin="normal"
          type="password"
          value={formik.values.cpassword}
          {...formik.getFieldProps("cpassword")}
          fullWidth
          id="cpassword"
          name="cpassword"
          label="Confirm Password"
        />
        {formik.touched.cpassword && formik.errors.cpassword ? (
          <Alert severity="error">{formik.errors.cpassword}</Alert>
        ) : null}
        <FormControl fullWidth margin="normal">
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.onBlur}
          >
            {radioOps.map((opt) => {
              return (
                <FormControlLabel
                  key={opt.key}
                  name="radio"
                  value={opt.value}
                  checked={opt.value === formik.values.radio}
                  control={<Radio />}
                  label={opt.value}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
        {formik.touched.radio && formik.errors.radio ? (
          <Alert severity="error">{formik.errors.radio}</Alert>
        ) : null}
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                name="tc"
                type="checkbox"
                id="tc"
                onChange={formik.handleChange}
                checked={formik.values.tc}
                color="primary"
              />
            }
            label="I Agree to terms and Condition"
          />
          {formik.errors.tc && formik.touched.tc ? (
            <Alert severity="error">{formik.errors.tc}</Alert>
          ) : null}

          <Box textAlign="center">
            <Button
              disabled={!formik.dirty}
              type="submit"
              variant="contained"
              sx={{ px: 2, mt: 3 }}
            >
              Signup
            </Button>
          </Box>
        </Box>{" "}
        {formik.isSubmitting ? (
          <Alert severity="success">Registered Successful</Alert>
        ) : null}
      </Box>
    </>
  );
};

export default Reg;
