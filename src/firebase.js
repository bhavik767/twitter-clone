import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAsrrkqghidBPD8yCtZ7j2EzA9TPxvV344",
    authDomain: "twitter-clone-db0be.firebaseapp.com",
    projectId: "twitter-clone-db0be",
    storageBucket: "twitter-clone-db0be.appspot.com",
    messagingSenderId: "125031120270",
    appId: "1:125031120270:web:e236ec94717bf0cc5538df",
    measurementId: "G-F25RYQ2BLC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;