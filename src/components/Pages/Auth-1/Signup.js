import { Box, Card, Grid, Tab, Tabs } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pic from "../../../images/Pic.svg";
import Login from "./Login";
import Reg from "./Reg";
const Tabpanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};
const Signup = () => {
  const [value, setvalue] = useState(0);

  const navigate = useNavigate();
  const handler = (e, newvalue) => {
    setvalue(newvalue);
  };

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login == 1) {
      return navigate("/");
    }
  }, []);

  return (
    <>
      <Grid container sx={{ height: `80vh`, marginTop: `1em` }}>
        <Grid
          item
          lg={6}
          sm={6}
          sx={{
            backgroundImage: `url(${Pic})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `40vw`,
            backgroundPosition: `center`,
            display: { xs: `none`, sm: `block` },
          }}
        ></Grid>
        <Grid item lg={6} sm={6} xs={12}>
          <Card sx={{ width: `98%`, height: `100%` }}>
            <Box sx={{ borderBottom: 1, borderColor: `divider` }}>
              <Tabs
                value={value}
                indicatorColor="secondary"
                textColor="secondary"
                onChange={handler}
              >
                <Tab sx={{ fontWeight: `bold` }} label="Login"></Tab>
                <Tab sx={{ fontWeight: `bold` }} label="Register"></Tab>
              </Tabs>
            </Box>
            <Tabpanel value={value} index={0}>
              <Login />
            </Tabpanel>
            <Tabpanel value={value} index={1}>
              <Reg />
            </Tabpanel>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
