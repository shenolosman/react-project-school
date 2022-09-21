import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" component="button" className={styles.link}>
              Money Tracking Manager App
            </Link>
          </Typography>
          {!user && (
            <>
              <Button variant="outlined" color="inherit">
                <Link component="button" className={styles.link} to="/login">
                  Login
                </Link>
              </Button>
              <Button variant="text" color="secondary">
                <Link component="button" className={styles.link} to="/signup">
                  Register
                </Link>
              </Button>
            </>
          )}
          {user&&(
          <>
            <Typography variant="overline" sx={{mr:5}}>
              Welcome <strong>{user.displayName}</strong>
            </Typography>
            <Button variant="contained" color="success">
                <Link component="button" className={styles.link} to="/chart">
                  Chart
                </Link>
              </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ ml: 5 }}
              onClick={logout}
            >
              LogOut
            </Button>
          </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
