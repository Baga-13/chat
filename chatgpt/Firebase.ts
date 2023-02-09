import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBFEqJbruIiQghmwU8ipbMPLEp0ofJKZQ4",
  authDomain: "chatgpt-project-ba78b.firebaseapp.com",
  projectId: "chatgpt-project-ba78b",
  storageBucket: "chatgpt-project-ba78b.appspot.com",
  messagingSenderId: "197216123422",
  appId: "1:197216123b422:web:e2119a9504304e23c00c0f",
  measurementId: "G-E3WNNQRNMZ"
};

// Initialize Firebase
// array of all initialized apps
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };