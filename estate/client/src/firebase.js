// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-fc5b2.firebaseapp.com",
  projectId: "estate-fc5b2",
  storageBucket: "estate-fc5b2.appspot.com",
  messagingSenderId: "428715134049",
  appId: "1:428715134049:web:3d377566e87e451afb2e20"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);