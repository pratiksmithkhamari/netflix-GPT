// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4tajMLQngq_Rxs_1yy_D33J8EXWxjjxU",
  authDomain: "netflix-gpt-8301e.firebaseapp.com",
  projectId: "netflix-gpt-8301e",
  storageBucket: "netflix-gpt-8301e.appspot.com",
  messagingSenderId: "449984390799",
  appId: "1:449984390799:web:b81f4e3028368f82bef2fa",
  measurementId: "G-BKPFEFNWBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();