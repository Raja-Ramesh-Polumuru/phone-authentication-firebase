// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe4UyB6Cb6cWc0yJ7BBZQL5tTgaX5ovXo",
  authDomain: "auth-demo-645ca.firebaseapp.com",
  projectId: "auth-demo-645ca",
  storageBucket: "auth-demo-645ca.appspot.com",
  messagingSenderId: "1014725706696",
  appId: "1:1014725706696:web:8083e2360dc3540357b6fd",
  measurementId: "G-D49RQC6WJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
