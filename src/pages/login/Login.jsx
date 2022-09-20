import {
  Container,
  Typography,
  Button,
  FormControl,
  FilledInput,
  InputLabel,
} from "@mui/material";
import React from "react";
import "./Login.module.css";
const Login = () => {
  return (
    <Container>
      <form>
        <Typography
          sx={{ mt: 15,textAlign:"center", fontWeight: "bold" }}
          variant="h2"
          color="darkslateblue"
        >
          Login Page
        </Typography>
        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <FilledInput id="email" label="Email" />
        </FormControl>
        <FormControl fullWidth sx={{ my: 5 }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <FilledInput id="password" label="Password" />
        </FormControl>
        <Button variant="outlined" type="submit" color="primary" size="large" sx={{mt:1}}>Log in</Button>
      </form>
    </Container>
  );
};

export default Login;
