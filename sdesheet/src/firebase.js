import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOopNnzq-hLxAY9aH7-bTRN79fKw78h4w",
    authDomain: "sdesheet-3466e.firebaseapp.com",
    projectId: "sdesheet-3466e",
    storageBucket: "sdesheet-3466e.appspot.com",
    messagingSenderId: "174543996815",
    appId: "1:174543996815:web:2bde8ed47e8c8de38c6dfa",
    measurementId: "G-WM240JKPDN"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};

