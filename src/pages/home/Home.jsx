import { Container, Grid } from "@mui/material";
import Form from "./Form";
import List from "./Liste";
import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import "./Home.module.css";
const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("MoneyManager",["uid","==",user.uid],["createdDate","desc"]);
  return (
    <Container sx={{ mt: 8 }}>
      <Grid container spacing={10}>
        <Grid item md={8} sm={12} xs={12}>
       {error && <p>{error}</p>}
       {documents && <List expenses={documents} />}
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Form uid={user.uid} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
