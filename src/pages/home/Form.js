import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, amount);
  };
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
        value={title}
        sx={{ my: 5 }}
      />
      <Button variant="contained" color="success" type="submit">
        Add
      </Button>
    </form>
  );
}
