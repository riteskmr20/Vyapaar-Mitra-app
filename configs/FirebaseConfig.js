// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsAQkTD4us4Dot34AyaVeApuV_OWteuyM",
  authDomain: "vyapaarmitra-8bf81.firebaseapp.com",
  projectId: "vyapaarmitra-8bf81",
  storageBucket: "vyapaarmitra-8bf81.appspot.com",
  messagingSenderId: "829269902626",
  appId: "1:829269902626:web:aa9e64f478db37b3d4917b",
  measurementId: "G-RJMX2SFV1L"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);  
 export const db=getFirestore(app);
// const analytics = getAnalytics(app);