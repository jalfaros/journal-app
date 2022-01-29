
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCCCUtJMksDnDaVl1ueI2MDmP_KZ22LvwY",
    authDomain: "react-app-curso-a6deb.firebaseapp.com",
    projectId: "react-app-curso-a6deb",
    storageBucket: "react-app-curso-a6deb.appspot.com",
    messagingSenderId: "182223328218",
    appId: "1:182223328218:web:b5553db4984e99e45066e3"
};


firebase.initializeApp( firebaseConfig );

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}