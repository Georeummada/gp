// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-8_yAqe3YEZtO-ndr3eHy_yDkSPE2N1E",
  authDomain: "georeummada-c5d2c.firebaseapp.com",
  databaseURL: "https://georeummada-c5d2c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "georeummada-c5d2c",
  storageBucket: "georeummada-c5d2c.appspot.com",
  messagingSenderId: "1082435169920",
  appId: "1:1082435169920:web:00054e497bdb8d7fa50065",
  measurementId: "G-Z8ETWHFS22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);