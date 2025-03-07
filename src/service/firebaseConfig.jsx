// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCulEwdUxXRdfQNJ7yMZRUzXh0eEcjZ8H8",
  authDomain: "ai-trip-30622.firebaseapp.com",
  projectId: "ai-trip-30622",
  storageBucket: "ai-trip-30622.firebasestorage.app",
  messagingSenderId: "1088010087237",
  appId: "1:1088010087237:web:bd4281d0fc321a3fb0ac2c",
  measurementId: "G-20H1PHHJ39"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)
