import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink,useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, authError, isLoading } = useAuth();
  const history = useHistory()
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password didn't match");
      return;
    }
    registerUser(loginData.email, loginData.password,loginData.name,history);
    e.preventDefault();
  };
  console.log(loginData);
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Register
            {isLoading ? (
              <CircularProgress />
            ) : (
              <form onSubmit={handleRegisterSubmit}>
                <TextField
                  onBlur={handleOnBlur}
                  sx={{ width: "75%", m: 1 }}
                  name="name"
                  id="standard-basic"
                  label="Your Name"
                  variant="standard"
                />
                <TextField
                  onBlur={handleOnBlur}
                  sx={{ width: "75%", m: 1 }}
                  name="email"
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                />
                <TextField
                  onBlur={handleOnBlur}
                  sx={{ width: "75%", m: 1 }}
                  name="password"
                  type="password"
                  id="standard-basic"
                  label="Your Password"
                  variant="standard"
                />{" "}
                <TextField
                  onBlur={handleOnBlur}
                  sx={{ width: "75%", m: 1 }}
                  name="password2"
                  type="password"
                  id="standard-basic"
                  label="Confirm Password"
                  variant="standard"
                />
                <Button
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  {" "}
                  <Button variant="text">
                    Already Registered? Please Login!!!
                  </Button>{" "}
                </NavLink>
              </form>
            )}
            {user && (
              <Alert severity="success">User Created Successfully!!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
