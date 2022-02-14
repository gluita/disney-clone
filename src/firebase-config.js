import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBK15aEoIKpoWaWBaNjBkt74979Woh3kP0",
  authDomain: "disney-e6c02.firebaseapp.com",
  projectId: "disney-e6c02",
  storageBucket: "disney-e6c02.appspot.com",
  messagingSenderId: "239525742475",
  appId: "1:239525742475:web:bbf42c089360cdc320118e",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

const auth = getAuth();


const storage = getStorage();
export { auth , storage};
export default db;