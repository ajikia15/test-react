// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getDoc,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  doc,
  setDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYEBZSJGHIbWivUVgmUF0ozhKzbT2XAhk",
  authDomain: "react-ogond-martla.firebaseapp.com",
  projectId: "react-ogond-martla",
  storageBucket: "react-ogond-martla.firebasestorage.app",
  messagingSenderId: "14408506951",
  appId: "1:14408506951:web:c54d67d8a97e3218219b62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export { getDoc, addDoc, collection, getDocs, onSnapshot, doc, setDoc };
