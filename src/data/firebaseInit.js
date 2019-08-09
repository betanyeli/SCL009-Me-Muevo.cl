import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAKYmjtR-PTP-ISO_RLlUAtWxJGQBorFnQ",
    authDomain: "me-muevo.firebaseapp.com",
    databaseURL: "https://me-muevo.firebaseio.com",
    projectId: "me-muevo",
    storageBucket: "",
    messagingSenderId: "946137648285",
    appId: "1:946137648285:web:79fafda9093c2fb1"
});
export const db = firebaseApp.firestore()

