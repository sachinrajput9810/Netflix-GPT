// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnCK3-qphT7Pl2wsmqAzQsndhRp4BYH9Y",
  authDomain: "netflixgpt-45e13.firebaseapp.com",
  projectId: "netflixgpt-45e13",
  storageBucket: "netflixgpt-45e13.appspot.com",
  messagingSenderId: "774358373966",
  appId: "1:774358373966:web:edc506c1f4ecaa60d3951f",
  measurementId: "G-5YX35GDFCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();