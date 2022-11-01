// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD05mW1xBD7PiyamrveSnFjn3gjdlK-9FY",
  authDomain: "donorrr-4d21c.firebaseapp.com",
  projectId: "donorrr-4d21c",
  storageBucket: "donorrr-4d21c.appspot.com",
  messagingSenderId: "940656333035",
  appId: "1:940656333035:web:0b6ba93131b69a65c3eeae",
  measurementId: "G-RD8JKSMZ7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

