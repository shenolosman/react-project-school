import {
  Container,
  Typography,
  Button,
  FormControl,
  FilledInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React, { useState } from "react";
import "./Login.module.css";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const { login, error, loading } = useLogin();

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value }); //created one method insted of two
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    login(values.email, values.password);
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
          Login Page
        </Typography>
        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <FilledInput
            id="email"
            label="Email"
            value={values.email}
            onChange={handleChange("email")}
          />
        </FormControl>
        <FormControl fullWidth sx={{ my: 5 }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <FilledInput
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

        {!loading && (
          <Button
            variant="outlined"
            type="submit"
            color="primary"
            size="large"
            sx={{ mt: 1 }}
          >
            Log in
          </Button>
        )}
        {loading && (
          <Button
            variant="outlined"
            type="submit"
            color="primary"
            size="large"
            sx={{ mt: 1 }}
            disabled
          >
            Loading...
          </Button>
        )}
        {error && <p>{error}</p>}
      </form>
    </Container>
  );
};

export default Login;
