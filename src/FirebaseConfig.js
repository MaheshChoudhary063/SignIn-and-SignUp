import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDp1f_1wL8ocsL6aLwZ6OQhphqRx5I5rw8",
  authDomain: "emailpasswordlogin-113cf.firebaseapp.com",
  projectId: "emailpasswordlogin-113cf",
  storageBucket: "emailpasswordlogin-113cf.appspot.com",
  messagingSenderId: "360469598211",
  appId: "1:360469598211:web:c68b2e87e2fafc450b7e36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)  