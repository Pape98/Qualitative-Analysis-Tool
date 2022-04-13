// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'research-needfinfing.firebaseapp.com',
  projectId: 'research-needfinfing',
  storageBucket: 'research-needfinfing.appspot.com',
  messagingSenderId: '316179366797',
  appId: '1:316179366797:web:d219a94c4f90f63e5d73c4',
  measurementId: 'G-RBD0VJVHG1',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const database = getFirestore(firebaseApp);

export default database;
