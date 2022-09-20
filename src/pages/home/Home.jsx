import { Container, Grid, Paper } from "@mui/material";
import Form from "./Form";
import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./Home.module.css";
const Home = () => {
  const { user } = useAuthContext();
  return (
    <Container sx={{ mt: 8 }}>
      <Grid container spacing={2}>
        <Grid item md={8} sm={12} xs={12}>
          Liste
          <hr />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Form uid={user.uid} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
