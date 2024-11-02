// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIIvsA1D0k8jAFlQOyNExH7w_2woQC_2w",
  authDomain: "my-firebase-js-app.firebaseapp.com",
  projectId: "my-firebase-js-app",
  storageBucket: "my-firebase-js-app.firebasestorage.app",
  messagingSenderId: "71113308073",
  appId: "1:71113308073:web:ec091e2a58d1e9e5e2b6b8",
  measurementId: "G-49C5KBT4EG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);