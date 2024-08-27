import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWJyTHzalqiRMwC5tiiFJchAadt8qKKJ0",
  authDomain: "netrox-project.firebaseapp.com",
  projectId: "netrox-project",
  storageBucket: "netrox-project.appspot.com",
  messagingSenderId: "1082376753592",
  appId: "1:1082376753592:web:a490fc5e4b1857c1bbbf4d",
  measurementId: "G-RG2JW7MN66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;