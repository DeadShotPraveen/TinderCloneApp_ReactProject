import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBajkOQ8UoLa-2SA4p1OvY5jRAWh2vvx24",
    authDomain: "tinderclone-6f237.firebaseapp.com",
    databaseURL: "https://tinderclone-6f237.firebaseio.com",
    projectId: "tinderclone-6f237",
    storageBucket: "tinderclone-6f237.appspot.com",
    messagingSenderId: "542249569968",
    appId: "1:542249569968:web:f42c08c39c5b8f843af575",
    measurementId: "G-BDN27E0K8B"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;



