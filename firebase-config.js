import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD59H109FhXxt3D9pDMy1fSbwPAwrfuPxo",
  authDomain: "carsorte.firebaseapp.com",
  projectId: "carsorte",
  storageBucket: "carsorte.firebasestorage.app",
  messagingSenderId: "995392174657",
  appId: "1:995392174657:web:df06498ea382e92e6ae4c0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
