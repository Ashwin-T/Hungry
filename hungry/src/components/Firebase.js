import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAOMpzWB7yH_ME9U8j5kVgiPXCYBg22ZTE",
    authDomain: "hungry-59726.firebaseapp.com",
    projectId: "hungry-59726",
    storageBucket: "hungry-59726.appspot.com",
    messagingSenderId: "1095684819285",
    appId: "1:1095684819285:web:7aea9e1b8515acd7b147dc",
    measurementId: "G-EKB9H708Z3"
}

firebase.initializeApp(firebaseConfig);

export default firebase;
