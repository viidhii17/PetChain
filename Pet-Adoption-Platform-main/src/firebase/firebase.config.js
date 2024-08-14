// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApsSHn0GnudmCnT3aAeuMZd8qJjO4S9do",
  authDomain: "login-pet-bf6aa.firebaseapp.com",
  projectId: "login-pet-bf6aa",
  storageBucket: "login-pet-bf6aa.appspot.com",
  messagingSenderId: "1044281318591",
  appId: "1:1044281318591:web:dc19dc256374529e3dba0a"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;