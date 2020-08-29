import React from "react";
import "./LiItem.css";
import db from "../firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import {
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
  Button,
} from "@material-ui/core";

function LiItem(props) {
  return (
    <List className="todo-list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.task} secondary="Dummy Deadline" />
      </ListItem>
      <Button
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      >
        <DeleteForeverIcon />
      </Button>
    </List>
  );
}

export default LiItem;
