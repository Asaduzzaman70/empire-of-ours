// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlMcf8XV5yN8Bz9s3qvaPzpHiSEb9gEmQ",
  authDomain: "assignment-9-empire-of-ours.firebaseapp.com",
  projectId: "assignment-9-empire-of-ours",
  storageBucket: "assignment-9-empire-of-ours.appspot.com",
  messagingSenderId: "463246790519",
  appId: "1:463246790519:web:138b5ad28e60b6ded29b72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;