// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMN1woqkYoBG5C8Jxdko7TgadqIdfldJQ",
  authDomain: "car-collection-13154.firebaseapp.com",
  projectId: "car-collection-13154",
  storageBucket: "car-collection-13154.appspot.com",
  messagingSenderId: "1017640460149",
  appId: "1:1017640460149:web:920337b2b12fea08dafd3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;