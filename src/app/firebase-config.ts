// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoyJb_nIOXDnbTxYD6MSz0LslQ6lI1Sh0",
  authDomain: "card-deck-manager-21f48.firebaseapp.com",
  projectId: "card-deck-manager-21f48",
  storageBucket: "card-deck-manager-21f48.firebasestorage.app",
  messagingSenderId: "983460789414",
  appId: "1:983460789414:web:5640d02de351c4e24b8867",
  measurementId: "G-R19SQ6HMPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };