import React, { useState } from "react";
import "./LiItem.css";
import db from "../firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import {
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
  Button,
  Modal,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function LiItem(props) {
  const classes = useStyles();
  const [open, setopen] = useState(false);
  const [input, setinput] = useState(props.todo.task);

  const updateTodo = () => {
    //update the todo with the new input text
    db.collection("todos").doc(props.todo.id).set(
      {
        task: input,
      },
      { merge: true }
    );

    setopen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setopen(false)}>
        <div className={classes.paper}>
          <h1>I am a Model</h1>
          <input
            type="text"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <Button onClick={updateTodo}>Update</Button>
        </div>
      </Modal>

      <List className="todo-list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.task} secondary="Dummy Deadline" />
        </ListItem>
        <Button onClick={(e) => setopen(true)}>Edit Me</Button>
        <Button
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          <DeleteForeverIcon />
        </Button>
      </List>
    </>
  );
}

export default LiItem;
