// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuw3WeIbFotqW8dELf_jip46y7D7W_6SI",
  authDomain: "dragon-news-7afba.firebaseapp.com",
  projectId: "dragon-news-7afba",
  storageBucket: "dragon-news-7afba.appspot.com",
  messagingSenderId: "131543122657",
  appId: "1:131543122657:web:a88c12d12b20bf61d0ada0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;