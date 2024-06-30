import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCQ7vMkTs_u3pBnAmVtWagqlTYemKxUSq4",
  authDomain: "e-commerce-dummy.firebaseapp.com",
  projectId: "e-commerce-dummy",
  storageBucket: "e-commerce-dummy.appspot.com",
  messagingSenderId: "692819728678",
  appId: "1:692819728678:web:e25f6bda96d014de17c9e7",
  measurementId: "G-GENL1FYFK1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage, app, analytics };
