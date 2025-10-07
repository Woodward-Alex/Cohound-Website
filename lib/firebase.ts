// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";
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

// JWT Token management
export const getAuthToken = async (): Promise<string | null> => {
  if (!auth?.currentUser) return null
  
  try {
    const token = await auth.currentUser.getIdToken(true)
    return token
  } catch (error) {
    console.error('Error getting auth token:', error)
    return null
  }
}

// Auth state observer
export const onAuthStateChange = (callback: (user: User | null) => void) => {
  if (!auth) return () => {}
  
  return onAuthStateChanged(auth, callback)
}

// Store tokens in memory (not localStorage for security)
let authToken: string | null = null
let refreshToken: string | null = null

export const setAuthTokens = (token: string, refresh: string) => {
  authToken = token
  refreshToken = refresh
}

export const getStoredAuthToken = () => authToken
export const getStoredRefreshToken = () => refreshToken

export const clearAuthTokens = () => {
  authToken = null
  refreshToken = null
}