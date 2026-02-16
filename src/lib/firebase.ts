/**
 * ============================================
 * 🔥 FIREBASE CONFIGURATION - ToyHaven UAE
 * ============================================
 *
 * To set up Firebase for the Contact form:
 *
 * 1. Go to https://console.firebase.google.com
 * 2. Create a new project (or select existing)
 * 3. Click "Add app" → Web app (</> icon)
 * 4. Copy the config object
 * 5. Replace the values below
 * 6. Enable Firestore Database in your Firebase project
 *    (Build → Firestore Database → Create database)
 *
 * ============================================
 */

import { initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

export const isFirebaseConfigured =
  firebaseConfig.apiKey !== "YOUR_API_KEY" &&
  firebaseConfig.projectId !== "YOUR_PROJECT_ID";

if (isFirebaseConfigured) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

export { db };
