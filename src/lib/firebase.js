import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD-odyKJtRgYoHFtM7BG341yHDC7yYzxA",
  authDomain: "portfolio-guestbook-2625d.firebaseapp.com",
  projectId: "portfolio-guestbook-2625d",
  storageBucket: "portfolio-guestbook-2625d.appspot.com",
  messagingSenderId: "835304602454",
  appId: "1:835304602454:web:f8b6f53579fc23cdac34f7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;