import {
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function Form({ expenses }) {
 // console.log(expenses);
  const { docDelete } = useFirestore("MoneyManager");
  return (
    <List>
      {expenses.map((x) => (
        <React.Fragment key={x.id}>
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => docDelete(x.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={x.title} secondary={x.amount}></ListItemText>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}
