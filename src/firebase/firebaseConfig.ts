// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgD97mgMkaU-BhNDqzHfpJFSfwcuYy7nI",
  authDomain: "portfolio-site-b30f9.firebaseapp.com",
  projectId: "portfolio-site-b30f9",
  storageBucket: "portfolio-site-b30f9.appspot.com",
  messagingSenderId: "679569884550",
  appId: "1:679569884550:web:2ba9c94309ea634f7ad807"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);