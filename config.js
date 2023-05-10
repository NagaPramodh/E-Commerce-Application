import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDbfewqxdXwPVpaJziRbczRBiZ_hb-CRJk",
  authDomain: "nikecart-dfede.firebaseapp.com",
  databaseURL: "https://nikecart-dfede-default-rtdb.firebaseio.com",
  projectId: "nikecart-dfede",
  storageBucket: "nikecart-dfede.appspot.com",
  messagingSenderId: "399397458746",
  appId: "1:399397458746:web:e864b8bcb39bfc0e80b603",
  measurementId: "G-XJ7KSHH4XY",
};

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db };
