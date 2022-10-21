// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMB-M8l2T3n3t5XBF6hGCjppWZINEA4Pg",
  authDomain: "restaurant-collab-app.firebaseapp.com",
  projectId: "restaurant-collab-app",
  storageBucket: "restaurant-collab-app.appspot.com",
  messagingSenderId: "826331101412",
  appId: "1:826331101412:web:90a5dc23b2f91a799354f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore() 