import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIza---",
  authDomain: "venturahr-front-end-2023.firebaseapp.com",
  projectId: "venturahr-front-end-2023",
  storageBucket: "venturahr-front-end-2023.appspot.com",
  messagingSenderId: "811---",
  appId: "1:811---:web:04ee---8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
