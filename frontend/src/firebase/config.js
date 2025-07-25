import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBZBLNI43SymOz7uzChchrYuH4zKAFuhko",
  authDomain: "thomas-counselling.firebaseapp.com",
  projectId: "thomas-counselling",
  storageBucket: "thomas-counselling.firebasestorage.app",
  messagingSenderId: "779832731470",
  appId: "1:779832731470:web:0b429571b461b12370601f"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app) 