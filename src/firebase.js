// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB65LPSn5XJXjMw9UaWPjWUVpOuDMrtCkA",
  authDomain: "onlinestore-8768a.firebaseapp.com",
  projectId: "onlinestore-8768a",
  storageBucket: "onlinestore-8768a.appspot.com",
  messagingSenderId: "578537785828",
  appId: "1:578537785828:web:41294a0f3c1fc552161ff1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app