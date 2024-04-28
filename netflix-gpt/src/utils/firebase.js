// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbn1RYBUM7q1xRddy6gpW2KPYeclULHyA",
  authDomain: "netflix-gpt-b35c6.firebaseapp.com",
  projectId: "netflix-gpt-b35c6",
  storageBucket: "netflix-gpt-b35c6.appspot.com",
  messagingSenderId: "963410801251",
  appId: "1:963410801251:web:646405eac7c73c75113e56",
  measurementId: "G-6YR4S78QX9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
