import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAHuwJxIpjcNUmI5Gc6SETp56ZKhMxy8ms",
    authDomain: "clothing-df7de.firebaseapp.com",
    projectId: "clothing-df7de",
    storageBucket: "clothing-df7de.appspot.com",
    messagingSenderId: "654690939210",
    appId: "1:654690939210:web:b3f6135de5334834e611b3"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);