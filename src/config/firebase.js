// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQTCrqcRWmQyJiww4Oyy2lDHHob5kBlAY",
  authDomain: "tiktok---jornada-ce41d.firebaseapp.com",
  projectId: "tiktok---jornada-ce41d",
  storageBucket: "tiktok---jornada-ce41d.appspot.com",
  messagingSenderId: "969286673960",
  appId: "1:969286673960:web:028dcdc8985af64d53b71d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;