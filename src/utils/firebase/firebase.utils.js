// Imported the functions we  need from the SDKs
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBefRiJUSlRhy-3sEFBLuNeHE6txIgVGus",
  authDomain: "crwn-db-8077e.firebaseapp.com",
  projectId: "crwn-db-8077e",
  storageBucket: "crwn-db-8077e.appspot.com",
  messagingSenderId: "406131329736",
  appId: "1:406131329736:web:56f0cf7e0a3bf7c2c3b3fd",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInwithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  try {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    if (!userSnapshot.exists()) {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInfo,
      });
    }
  } catch (error) {
    console.log("Error creating user" + error.message);
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};
