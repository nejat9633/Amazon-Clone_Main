import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
//Auth
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhUnLph68Q6TSwNYNJ0rAsMB6FfaPbOng",
  authDomain: "clone-df27d.firebaseapp.com",
  projectId: "clone-df27d",
  storageBucket: "clone-df27d.firebasestorage.app",
  messagingSenderId: "824888155128",
  appId: "1:824888155128:web:e703e073feb3eac939d40d",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()