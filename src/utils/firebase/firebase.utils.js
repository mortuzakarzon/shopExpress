// Imported the functions we  need from the SDKs
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInwithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};
