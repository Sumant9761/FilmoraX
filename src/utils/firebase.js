// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdCxL_iEZEYC2b0tYJhRPY4rkZcuCeUDk",
  authDomain: "filmorax-a18ca.firebaseapp.com",
  projectId: "filmorax-a18ca",
  storageBucket: "filmorax-a18ca.firebasestorage.app",
  messagingSenderId: "193057775237",
  appId: "1:193057775237:web:a766c9e314fc90586093ec",
  measurementId: "G-KP0CZ4R17W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();