import { Button, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";
export default function Form({ uid }) {
  const { docAdd, response } = useFirestore("MoneyManager");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(title, amount);
    docAdd({ uid, title, amount });
  };

  useEffect(() => {
    console.log(response);
    if (response.success) {
    // if (response) {
      setTitle("");
      setAmount("");
    }
  // }, [response]);
  }, [response].success);
  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Typography variant="h6" color="darkslateblue">
        Type your expense
      </Typography>
      <TextField
        label="Title"
        variant="standard"
        fullWidth
        required
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <TextField
        label="Amount"
        variant="standard"
        fullWidth
        required
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        sx={{ my: 5 }}
      />
      <Button variant="contained" color="primary" type="submit">
        Add
      </Button>
    </form>
  );
}
