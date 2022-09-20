import {
  Container,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React, { useState } from "react";
import "./Signup.module.css";
const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    username:""
  });

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value }); //created one method insted of two
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleVisibiltyPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography
          sx={{ mt: 15, textAlign: "center", fontWeight: "bold" }}
          variant="h2"
          color="darkslateblue"
        >
          Register Page
        </Typography>
        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            label="Email"
            value={values.email}
            onChange={handleChange("email")}
          />
        </FormControl>
        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            label="Password"
            value={values.password}
            onChange={handleChange("password")}
            type={values.showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle Password"
                  onClick={handleVisibiltyPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth sx={{ my: 5 }}>
          <InputLabel htmlFor="username">Username</InputLabel>
          <OutlinedInput
            id="username"
            label="Username"
            value={values.username}
            onChange={handleChange("username")}
          />
        </FormControl>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          size="large"
          sx={{ mt: 1 }}
        >
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
