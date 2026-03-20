
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuMsfLx_qCX9Oj2_6GkrmlPAWvEIxqFtA",
    authDomain: "prepwise-eb371.firebaseapp.com",
    projectId: "prepwise-eb371",
    storageBucket: "prepwise-eb371.firebasestorage.app",
    messagingSenderId: "185673511626",
    appId: "1:185673511626:web:0df373d4de05accab6ba33",
    measurementId: "G-EKRNKJJYYK"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);