import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCTRAdceoTbtvNIW6CjcnSDwqsovjuM9aY",
  authDomain: "gritverse-15493.firebaseapp.com",
  projectId: "gritverse-15493",
  storageBucket: "gritverse-15493.appspot.com",
  messagingSenderId: "567530223495",
  appId: "1:567530223495:web:aad5d730be1d87806f8522",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
