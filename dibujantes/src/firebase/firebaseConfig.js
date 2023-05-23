import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChRLjCJMiUucO6kOW03VgcxfpLT17Y054",
    authDomain: "projectis2.firebaseapp.com",
    projectId: "projectis2",
    storageBucket: "projectis2.appspot.com",
    messagingSenderId: "424091491292",
    appId: "1:424091491292:web:6ee47239506e6245164d19",
    measurementId: "G-QX6LW4JD8Q"
};

// Inicializar Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  
  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
  export { db, googleAuthProvider, firebase };