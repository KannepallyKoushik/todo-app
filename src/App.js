import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import LiItem from "./components/LiItem";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todo, setTodo] = useState([]);

  const [input, setinput] = useState("");

  const [order, setorder] = useState("asc");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", order)
      .onSnapshot((snapshot) => {
        //Note :- 1.In below code doc.data() gives an object
        //        2.snapshot.doc gives an array of objects
        let arr = snapshot.docs.map((doc) => ({
          id: doc.id,
          task: doc.data().task,
        })); //Getting all the docs inside todos collection and storing it in an array

        setTodo(arr);
      });
  }, [order]);

  const addTodo = (event) => {
    //This is fireoff when we click the button
    event.preventDefault(); //Will stop the reloading of page

    //Adding ToDO to firestore collection todos
    db.collection("todos").add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setinput(""); // CLear the input after clicking add todo button
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <select onChange={(event) => setorder(event.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <form>
        <FormControl>
          <InputLabel>Write a to-do here</InputLabel>
          <Input
            value={input}
            onChange={(event) => setinput(event.target.value)}
          />
        </FormControl>

        <Button
          type="submit"
          disabled={!input}
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add To-Do
        </Button>

        <ul>
          {todo.map((el) => (
            <LiItem todo={el} />
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
