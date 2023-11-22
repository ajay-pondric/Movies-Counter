// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzHtRcBHhNr7fkCWxqUz9d3EZPHo20x-8",
  authDomain: "movies-counter-48bdb.firebaseapp.com",
  projectId: "movies-counter-48bdb",
  storageBucket: "movies-counter-48bdb.appspot.com",
  messagingSenderId: "492024327581",
  appId: "1:492024327581:web:a0e78df74ba8492b515374",
  measurementId: "G-1Q7V04GVXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
