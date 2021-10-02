import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDEaG8AgmZgVR0PCaIocrM5TN9w8axyMBg",
    authDomain: "instagram-956a0.firebaseapp.com",
    projectId: "instagram-956a0",
    storageBucket: "instagram-956a0.appspot.com",
    messagingSenderId: "60157691126",
    appId: "1:60157691126:web:670c4c10c4ae729694d8d7",
    measurementId: "G-MJGXRNHL2Q"
};

const server = firebase.initializeApp(firebaseConfig);
const auth = server.auth();
const database = server.firestore();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, database, provider};