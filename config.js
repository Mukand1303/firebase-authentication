import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBv9hV-FBqAKgoGGW3HPm0FZjpJjNYC7dk",
  authDomain: "social-app-c8f18.firebaseapp.com",
  projectId: "social-app-c8f18",
  storageBucket: "social-app-c8f18.appspot.com",
  messagingSenderId: "526915454558",
  appId: "1:526915454558:web:a37b24f4a7fbcf15c096cf",
  measurementId: "G-H4267PN7LX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
