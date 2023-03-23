// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2b1XSez3uKEixM99kyRAtAk4gtu9Ndjo",
  authDomain: "fb-db-react.firebaseapp.com",
  projectId: "fb-db-react",
  storageBucket: "fb-db-react.appspot.com",
  messagingSenderId: "499972272669",
  appId: "1:499972272669:web:06de69dc735e1dbb154cf4",
  measurementId: "G-L415P1CHRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  default app;