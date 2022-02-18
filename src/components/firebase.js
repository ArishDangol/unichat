import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDf5TrUNn3IdTGN5mMIGT4mMd0nhjWb6vQ",
    authDomain: "unichat-fc8cc.firebaseapp.com",
    projectId: "unichat-fc8cc",
    storageBucket: "unichat-fc8cc.appspot.com",
    messagingSenderId: "290089941474",
    appId: "1:290089941474:web:6f3b8b74315a721f3ae1bb"
  }).auth();
