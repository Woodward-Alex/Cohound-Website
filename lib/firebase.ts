import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs5hrJI0A68O5FPHGIjgzMnigfZada_cg",
  authDomain: "cohound-fb002.firebaseapp.com",
  projectId: "cohound-fb002",
  storageBucket: "cohound-fb002.firebasestorage.app",
  messagingSenderId: "1039983931886",
  appId: "1:1039983931886:web:2c0c644e54595a1e8e9eff",
  measurementId: "G-70S86EKJMD"
};

// Only initialize Firebase in the browser
const isBrowser = typeof window !== "undefined"
const app = isBrowser && !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]

export const auth = isBrowser ? getAuth(app) : null
export const db = isBrowser ? getFirestore(app) : null
export const googleProvider = isBrowser ? new GoogleAuthProvider() : null

export function isFirebaseConfigured() {
  return !!firebaseConfig.apiKey && !!firebaseConfig.projectId
}
//Firebase Auth Keys https://console.firebase.google.com/project/cohound-fb002/settings/general/web:ZDViNmM2MWQtZTE0ZS00MmI4LTg5MjEtMDY1MDU1ZDg3MjBi