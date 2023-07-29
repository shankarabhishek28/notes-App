// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBX9W9-7nVI_bc4P_3PUZSAf0BY4zD9kmw",
  authDomain: "react-notes-a997b.firebaseapp.com",
  projectId: "react-notes-a997b",
  storageBucket: "react-notes-a997b.appspot.com",
  messagingSenderId: "613193623915",
  appId: "1:613193623915:web:d79d96d452fecb3230842e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")