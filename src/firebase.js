
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF1VrCzDdVTMFm6B15OZbggiRUwHJP0L4",
  authDomain: "admin-login-2f43a.firebaseapp.com",
  projectId: "admin-login-2f43a",
  storageBucket: "admin-login-2f43a.appspot.com",
  messagingSenderId: "402188889488",
  appId: "1:402188889488:web:2af08c48e87133e1a8d715",
  measurementId: "G-9WEKKQW8W0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const auth = getAuth(app);

export default app;