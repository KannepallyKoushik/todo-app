import firebase from "firebase";

const config = {
  apiKey: "AIzaSyACsnYmOlZjMihMy7iodC6mBnfsTCHyF0M",
  authDomain: "todo-app-da655.firebaseapp.com",
  databaseURL: "https://todo-app-da655.firebaseio.com",
  projectId: "todo-app-da655",
  storageBucket: "todo-app-da655.appspot.com",
  messagingSenderId: "876332301209",
  appId: "1:876332301209:web:f463f0bae7be1877d6f108",
  measurementId: "G-WY8MC8D95H",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

export default db;
