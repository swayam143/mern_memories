import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin, signup } from "../../Redux/actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  confirmpassword: "",
  password: "",
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (isSignUp) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Grid container justifyContent="center" paddingTop={isSignUp ? 10 : 20}>
        <Grid padding={2} item xs={12} sm={6} md={4} lg={4} xl={3}>
          <Grid className="glass" padding={2}>
            <Typography
              color="#fff"
              align="center"
              fontSize={40}
              fontWeight={600}
              marginBottom={2}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Typography>
            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <>
                  <InputLabel
                    sx={{ color: "#fff", marginBottom: "10px" }}
                    htmlFor="filled-adornment-password"
                  >
                    first Name
                  </InputLabel>
                  <OutlinedInput
                    onChange={handleChange}
                    className="br_white "
                    sx={{ marginBottom: "20px", color: "#fff" }}
                    fullWidth
                    size="small"
                    name="firstName"
                    autoFocus
                  />
                  <InputLabel
                    sx={{ color: "#fff", marginBottom: "10px" }}
                    htmlFor="filled-adornment-password"
                  >
                    last Name
                  </InputLabel>
                  <OutlinedInput
                    onChange={handleChange}
                    className="br_white"
                    sx={{ marginBottom: "20px", color: "#fff" }}
                    fullWidth
                    size="small"
                    name="lastName"
                    autoFocus
                  />
                </>
              )}
              <InputLabel
                sx={{ color: "#fff", marginBottom: "10px" }}
                htmlFor="filled-adornment-password"
              >
                Email Address
              </InputLabel>
              <OutlinedInput
                onChange={handleChange}
                className="br_white"
                sx={{ marginBottom: "20px", color: "#fff" }}
                fullWidth
                size="small"
                name="email"
                type="email"
              />

              <InputLabel
                sx={{ color: "#fff", marginBottom: "10px" }}
                htmlFor="filled-adornment-password"
              >
                Password
              </InputLabel>
              <OutlinedInput
                name="password"
                className="br_white"
                sx={{ marginBottom: "20px", color: "#fff" }}
                fullWidth
                size="small"
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={() => setShowPassword(false)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {isSignUp && (
                <>
                  {" "}
                  <InputLabel
                    sx={{ color: "#fff", marginBottom: "10px" }}
                    htmlFor="filled-adornment-password"
                  >
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    name="confirmpassword"
                    className="br_white"
                    sx={{ marginBottom: "20px", color: "#fff" }}
                    fullWidth
                    size="small"
                    id="filled-adornment-password"
                    type={showPassword ? "text" : "password"}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={() => setShowPassword(false)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </>
              )}

              <Button
                className="sign_in_btn"
                variant="contained"
                type="submit"
                fullWidth
                color="success"
              >
                {isSignUp ? "Sign Up" : "Sign in"}
              </Button>
              <Button
                onClick={() => setIsSignUp(!isSignUp)}
                sx={{ textTransform: "none", marginTop: "20px" }}
                variant="contained"
                fullWidth
                color="success"
              >
                {isSignUp
                  ? "Already have an Account? Sign in"
                  : "Dont have an Account ? Sign up"}
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Auth;
