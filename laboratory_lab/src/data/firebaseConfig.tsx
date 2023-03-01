
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDEbwO0ZFZO0PalnfwfHDoWf8X29SesKa0",
  authDomain: "laboratory-5c093.firebaseapp.com",
  databaseURL:
    "https://laboratory-5c093-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "laboratory-5c093",
  storageBucket: "laboratory-5c093.appspot.com",
  messagingSenderId: "235594147342",
  appId: "1:235594147342:web:3423a1ab9bebb3eb643e5f",
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth() 
