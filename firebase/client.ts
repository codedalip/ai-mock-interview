// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhO1dmC6rLE6ncTewK-xsO1ufo_tiUdtM",
  authDomain: "prepwise-38f43.firebaseapp.com",
  projectId: "prepwise-38f43",
  storageBucket: "prepwise-38f43.firebasestorage.app",
  messagingSenderId: "558597867700",
  appId: "1:558597867700:web:040dd9a9b449b157beafe1",
  measurementId: "G-05BD07QRJH"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app); 
export const db = getFirestore(app); 