import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyCenm81JsRN6qezxDBTayrXybN-GNMU36A",
    authDomain: "crwn-db-236bf.firebaseapp.com",
    projectId: "crwn-db-236bf",
    storageBucket: "crwn-db-236bf.appspot.com",
    messagingSenderId: "1003809203657",
    appId: "1:1003809203657:web:311499c4d12131c1edb418",
    measurementId: "G-EX1TRMPHV5"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase