// Firebase Configuration & Initialization for Navithya (GetItDone.lk style portal)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  onSnapshot,
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyDMVxd4yyprLIUlszbAnPN7L02KE5Sfb0s",
  authDomain: "navithya-ca0e7.firebaseapp.com",
  projectId: "navithya-ca0e7",
  storageBucket: "navithya-ca0e7.firebasestorage.app",
  messagingSenderId: "44611390829",
  appId: "1:44611390829:web:3497a4732c6614e9101e64",
  measurementId: "G-63GNZXPXBF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

let analytics = null;
try {
  analytics = getAnalytics(app);
} catch (e) {
  console.log("Analytics initialized in supported environment");
}

export const db = getFirestore(app);
export { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy, onSnapshot, serverTimestamp };

// Global fallback & Firebase helper
window.navithyaDB = {
  db,
  app,
  analytics,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
};
