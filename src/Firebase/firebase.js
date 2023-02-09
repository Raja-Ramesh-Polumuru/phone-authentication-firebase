// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAELwF2UK7tm5t3qLBezqCzVU-PEdjSdVA",
  authDomain: "phone-auth-firebase-145b0.firebaseapp.com",
  projectId: "phone-auth-firebase-145b0",
  storageBucket: "phone-auth-firebase-145b0.appspot.com",
  messagingSenderId: "346018518135",
  appId: "1:346018518135:web:e2a2bd25dfe743dfa5a272",
  measurementId: "G-4WFPK5YPHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);