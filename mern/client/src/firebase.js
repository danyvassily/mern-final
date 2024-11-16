// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-afec.firebaseapp.com",
  projectId: "mern-project-afec",
  storageBucket: "mern-project-afec.firebasestorage.app",
  messagingSenderId: "540199767589",
  appId: "1:540199767589:web:272e635c5553bab01fb9cc",
  measurementId: "G-KHDPH8PCXN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);   

