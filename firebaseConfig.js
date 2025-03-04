// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCgER5FCuXL60AhVk9Nt5hvL7ka4SMzG-0",
  authDomain: "react-native-ec524.firebaseapp.com",
  projectId: "react-native-ec524",
  storageBucket: "react-native-ec524.firebasestorage.app",
  messagingSenderId: "429750106659",
  appId: "1:429750106659:web:9fe66b1c08929762e84f96",
  measurementId: "G-SZF0T2F3KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;