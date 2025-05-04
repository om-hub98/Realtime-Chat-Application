 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    // apiKey: process.env.REACT_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
    // measurementId: process.env.REACT_APP_MEASUREMENT_ID,

    apiKey: "AIzaSyDYV_E_ZdE_kcVE0mMK8ohJ07BJ6i9-feE",
    authDomain: "chat-app-7669a.firebaseapp.com",
    projectId: "chat-app-7669a",
    storageBucket: "chat-app-7669a.appspot.com",
    messagingSenderId: "689064466552",
    appId: "1:689064466552:web:95d3e0f31ad170866df58d",
    measurementId: "G-5TG367GJEW",

  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
