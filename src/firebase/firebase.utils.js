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


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error crating user', error.message)
        }

    }
    return userRef

}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase