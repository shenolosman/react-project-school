import { Container, Grid, Paper } from "@mui/material";
import Form from "./Form";
import React from "react";

import "./Home.module.css";
const Home = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Grid container spacing={2}>
        <Grid item md={8} sm={12} xs={12}>
            Test
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
