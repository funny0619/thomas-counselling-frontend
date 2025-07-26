import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

let app = null
let auth = null

try {
  app = initializeApp(firebaseConfig)
  auth = getAuth(app)
} catch (error) {
  console.warn('Firebase initialization failed:', error)
  // Create a mock auth object to prevent errors
  auth = {
    currentUser: null,
    onAuthStateChanged: (callback) => {
      // Call the callback immediately with null user to simulate no authentication
      setTimeout(() => callback(null), 0)
      return () => { } // Return unsubscribe function
    },
    signOut: () => Promise.resolve(),
    signInWithEmailAndPassword: () => Promise.reject(new Error('Firebase not available')),
    createUserWithEmailAndPassword: () => Promise.reject(new Error('Firebase not available')),
    signInWithPopup: () => Promise.reject(new Error('Firebase not available')),
    updateProfile: () => Promise.reject(new Error('Firebase not available')),
    sendEmailVerification: () => Promise.reject(new Error('Firebase not available'))
  }
}

export { auth }