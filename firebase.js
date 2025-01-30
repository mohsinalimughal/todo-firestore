// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA74fayROb9BRJr-88JXB3ThUXxHHvxIPg",
  authDomain: "first-firebase-project-3ab72.firebaseapp.com",
  projectId: "first-firebase-project-3ab72",
  storageBucket: "first-firebase-project-3ab72.firebasestorage.app",
  messagingSenderId: "87733205782",
  appId: "1:87733205782:web:6351961811e1b82d1dae37",
  measurementId: "G-FLDJ2JCDNP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);