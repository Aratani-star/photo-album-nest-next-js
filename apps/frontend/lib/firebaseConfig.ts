import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW1aKzFjfoiLA600yjQvCYhJX9e2m3-Y8",
  authDomain: "signin-ea76e.firebaseapp.com",
  projectId: "signin-ea76e",
  storageBucket: "signin-ea76e.firebasestorage.app",
  messagingSenderId: "764608279876",
  appId: "1:764608279876:web:e1bff1243479124e1b1311",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };