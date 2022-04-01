import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxzfDSVmhjVaZ24NSRjZc8qchnxwZqOa0",
  authDomain: "react-authentication-softz.firebaseapp.com",
  projectId: "react-authentication-softz",
  storageBucket: "react-authentication-softz.appspot.com",
  messagingSenderId: "605075104638",
  appId: "1:605075104638:web:bb23ff63c95a8ad390092f",
  measurementId: "G-92EBYLD4LS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
