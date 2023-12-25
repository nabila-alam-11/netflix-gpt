// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXG8H20kEwPaOiPTCe_UU7i2aMfWmmFa8",
  authDomain: "netflixgpt-234bd.firebaseapp.com",
  projectId: "netflixgpt-234bd",
  storageBucket: "netflixgpt-234bd.appspot.com",
  messagingSenderId: "219381398065",
  appId: "1:219381398065:web:47b8ada3f074ac3c043310",
  measurementId: "G-62MLYMKFQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();