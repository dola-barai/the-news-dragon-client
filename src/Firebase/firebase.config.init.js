// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_vlSHzn9S5TCQ9FsxsKG5bQLv--ZenbE",
  authDomain: "the-news-dragon-client-d5516.firebaseapp.com",
  projectId: "the-news-dragon-client-d5516",
  storageBucket: "the-news-dragon-client-d5516.appspot.com",
  messagingSenderId: "1005468475269",
  appId: "1:1005468475269:web:804a078fe133dae1362eec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;