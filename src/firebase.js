// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBO8fPWLXyILiC5XTwxSyoSPseVoBCERU",
  authDomain: "react-fb-auth-a3bb9.firebaseapp.com",
  projectId: "react-fb-auth-a3bb9",
  storageBucket: "react-fb-auth-a3bb9.appspot.com",
  messagingSenderId: "845620372908",
  appId: "1:845620372908:web:7c7a2275d425ab6420c609",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
