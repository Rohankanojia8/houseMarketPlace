import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDh3Hslnv5lExwMT1r7Sottu7q-4-jy52k",
  authDomain: "house-market-app-a6604.firebaseapp.com",
  projectId: "house-market-app-a6604",
  storageBucket: "house-market-app-a6604.appspot.com",
  messagingSenderId: "418771745548",
  appId: "1:418771745548:web:3f58ab24a6dc75347ae729"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()