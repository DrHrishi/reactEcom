import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD9S7LQJOXHWnKs9kcDtNZ_ciK6vxKMh-Y",
    authDomain: "directsell-db.firebaseapp.com",
    databaseURL: "https://directsell-db.firebaseio.com",
    projectId: "directsell-db",
    storageBucket: "",
    messagingSenderId: "291644261995",
    appId: "1:291644261995:web:d3121875732d61278c932e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;