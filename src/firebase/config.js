import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA49dCrhaDjDYIha1qM4Nm2ej4BiUTg4VY",
  authDomain: "firegram-da96f.firebaseapp.com",
  databaseURL: "https://firegram-da96f-default-rtdb.firebaseio.com",
  projectId: "firegram-da96f",
  storageBucket: "firegram-da96f.appspot.com",
  messagingSenderId: "971764674835",
  appId: "1:971764674835:web:9b7ced8c149179188feae6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };