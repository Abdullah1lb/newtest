import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import React from "react";
const Input = styled("input")({
  display: "none",
});
const Home = () => {
  // const [name, setname] = useState("");
  // const [email, setemail] = useState("");
  // const [gender, setgender] = useState("");
  // const [dob, setDob] = useState(null);
  // const [st, setst] = useState("");
  // const [img, setimg] = useState("");
  // const [doc, setdoc] = useState("");
  // const [pl, setpjl] = useState([]);
  // const [error, seterror] = useState({ status: false, msg: "", type: "" });

  // const Handler = (e) => {
  //   e.preventDefault();
  //   // alert("hello world");
  //   const data = new FormData();
  //   data.append("name", name);
  //   console.log(data.get("name"));
  //   data.append("email", email);
  //   console.log(data.get("email"));

  //   data.append("gender", gender);
  //   console.log(data.get("gender"));

  //   data.append("dob", dob);
  //   console.log(data.get("dob"));

  //   data.append("st", st);
  //   console.log(data.get("st"));

  //   data.append("img", img);
  //   console.log(data.get("img"));

  //   data.append("doc", doc);
  //   console.log(data.get("doc"));

  //   data.append("pl", pl);
  //   console.log(data.get("pl"));

  //   if (name && email) {
  //     console.log(data);
  //     seterror({
  //       status: true,
  //       msg: "Resume Uploaded Successfully",
  //       type: "success",
  //     });
  //     document.getElementById("form-data").reset();
  //   } else {
  //     seterror({ status: true, msg: "All Fields are Required", type: "error" });
  //   }
  // };
  // const pjl = (e) => {
  //   const data = pl;
  //   data.push(e.target.value);
  //   setpjl(data);
  // };
  const selectOps = [
    { key: "opt1", value: "Punjab" },
    { key: "opt2", value: "Sindh" },
    { key: "opt3", value: "Balochistan" },
  ];
  const radioOps = [
    { key: "opt1", value: "Male" },
    { key: "opt2", value: "Female" },
    { key: "opt3", value: "Other" },
  ];
  const checkboxOps = [
    { key: "opt1", value: "Lahore" },
    { key: "opt2", value: "Karachi" },
    { key: "opt3", value: "Islamabad" },
  ];
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      select: "",
      radio: "",
      checkbox: [],
    },
    onSubmit: (values) => {
      console.log(values);
      setTimeout(() => {
        formik.resetForm();
      }, 1000);
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email("Invalid Email").required(),
      select: Yup.string().required(),
      radio: Yup.string().required("Gender is required"),
      checkbox: Yup.array().required("Atleast one location is required"),
    }),
  });

  return (
    <>
      <Box display="flex" justifyContent="center" sx={{ p: 3, boxShadow: 2 }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", color: "purple" }}
        >
          Resume Uploader
        </Typography>
      </Box>
      <Grid container sx={{ mt: 2 }} justifyContent="center">
        <Grid item sm={5}>
          <Box
            id="form-data"
            noValidate
            component="form"
            sx={{ px: 3 }}
            onSubmit={formik.handleSubmit}
          >
            <TextField
              label="Name"
              name="name"
              id="name"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <Alert severity="error">{formik.errors.name}</Alert>
            ) : null}
            <TextField
              margin="normal"
              label="Email"
              name="email"
              id="email"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Alert severity="error">{formik.errors.email}</Alert>
            ) : null}
            {/* <Box sx={{ mt: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of Birth"
                  value={dob || ""}
                  onChange={(newVal) => {
                    setDob(newVal);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box> */}
            <FormControl fullWidth margin="normal">
              <InputLabel id="select">State</InputLabel>
              <Select
                labelId="select"
                name="select"
                id="select"
                value={formik.values.select}
                label="State"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {selectOps.map((opt) => {
                  return (
                    <MenuItem key={opt.key} value={opt.value}>
                      {opt.value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            {formik.touched.select && formik.errors.select ? (
              <Alert severity="error">{formik.errors.select}</Alert>
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
            <FormControl>
              <FormLabel>Preferred Job Location</FormLabel>

              <FormGroup
                name="location"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                row
              >
                {checkboxOps.map((opt) => {
                  return (
                    <FormControlLabel
                      key={opt.key}
                      value={opt.value}
                      checked={formik.values.checkbox.includes(opt.value)}
                      name="checkbox"
                      control={<Checkbox />}
                      label={opt.value}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
            {formik.touched.checkbox && formik.errors.checkbox ? (
              <Alert severity="error">{formik.errors.checkbox}</Alert>
            ) : null}
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="profile">
                <Input accept="image/*" id="profile" type="file" />
                <Button variant="contained" component="span">
                  Upload Photo
                </Button>
              </label>
              <label htmlFor="doc">
                <Input accept="doc/*" id="doc" type="file" />
                <Button variant="contained" component="span">
                  Upload File
                </Button>
              </label>
            </Stack>
            <Button
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
              // component="span"
              color="error"
              type="submit"
              form="form-data"
              // component="input"
              // onClick={(e) => Handler(e)}
            >
              Submit
            </Button>
          </Box>
          {/* {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""} */}
        </Grid>
        <Grid item sm={7} sx={{ px: 2 }}>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ p: 3, boxShadow: 2, backgroundColor: "green" }}
          >
            <Typography sx={{ fontWeight: "bold", color: "white" }}>
              List of Candidates
            </Typography>
          </Box>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    Email
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    DOB
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    State
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    Gender
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    Location
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="left">
                    Avatar
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableRow>
                  <TableCell align="left">Abdullah Rehman</TableCell>
                  <TableCell align="left">abcgtr35@gmail.com</TableCell>
                  <TableCell align="left">19/5/1999</TableCell>
                  <TableCell align="left">Punjab</TableCell>
                  <TableCell align="left">Male</TableCell>
                  <TableCell align="left">Lahore</TableCell>
                  <TableCell align="left">
                    <Avatar src="#" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
