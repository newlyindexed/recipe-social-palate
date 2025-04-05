
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCd9Jl01Ww3Z1LbMmUPwgrXehxATDeDhXI",
  authDomain: "not-just-salad.firebaseapp.com",
  projectId: "not-just-salad",
  storageBucket: "not-just-salad.firebasestorage.app",
  messagingSenderId: "554910942664",
  appId: "1:554910942664:web:81d68920cb4bb761906cfd",
  measurementId: "G-YTQ4FNTKKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
