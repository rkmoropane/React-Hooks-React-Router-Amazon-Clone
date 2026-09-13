import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANOP2xbehJQFJMzDGwQR-Vdx4m-uIpUXM",
  authDomain: "zaio--clone-7b275.firebaseapp.com",
  projectId: "zaio--clone-7b275",
  storageBucket: "zaio--clone-7b275.firebasestorage.app",
  messagingSenderId: "568990020591",
  appId: "1:568990020591:web:fc161a3188be5130013c1a",
  measurementId: "G-Z97KF9B27W"
};

// initiallise the firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const var that is responsible for the database
const db = firebaseApp.firestore();

// const var that is responsible for the authentication
const auth = firebase.auth();

export { db, auth };
