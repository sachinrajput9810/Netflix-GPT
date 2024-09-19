// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWT91LXqtSBpIBagffHIzyBkfTop5aVjM",
  authDomain: "netflix-gpt-413d8.firebaseapp.com",
  projectId: "netflix-gpt-413d8",
  storageBucket: "netflix-gpt-413d8.appspot.com",
  messagingSenderId: "366852751938",
  appId: "1:366852751938:web:e5a88dd28631feb088e3db",
  measurementId: "G-0GP3VJXK8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);