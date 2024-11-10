// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF0rImb-fNLJOhMzOjUsaeQNLJJjMm2FQ",
  authDomain: "email-password-login-aut-a2c45.firebaseapp.com",
  projectId: "email-password-login-aut-a2c45",
  storageBucket: "email-password-login-aut-a2c45.firebasestorage.app",
  messagingSenderId: "1027519547393",
  appId: "1:1027519547393:web:a61ee776bb18d22208d800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);