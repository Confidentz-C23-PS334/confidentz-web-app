import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBHYly5R32S_e2IRLcDqQKZ8EQOTbh-xhE",
  authDomain: "rest-api-firebase-cd5ca.firebaseapp.com",
  projectId: "rest-api-firebase-cd5ca",
  storageBucket: "rest-api-firebase-cd5ca.appspot.com",
  messagingSenderId: "724609663965",
  appId: "1:724609663965:web:e620122477412aaf52ec34"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// Referensi Firestore
const db = firebase.firestore();

export { firebase, db };
