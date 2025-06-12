import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
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