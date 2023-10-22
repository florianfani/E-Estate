// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "e-estate-e3bb4.firebaseapp.com",
  projectId: "e-estate-e3bb4",
  storageBucket: "e-estate-e3bb4.appspot.com",
  messagingSenderId: "504300986275",
  appId: "1:504300986275:web:9fff6916a20c54fa7ec416"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);