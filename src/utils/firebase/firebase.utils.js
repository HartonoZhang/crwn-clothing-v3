import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACrbGWAZIM6zJbLSN8c0B-uUjggs9g1nw",
  authDomain: "shop-db-a3f85.firebaseapp.com",
  projectId: "shop-db-a3f85",
  storageBucket: "shop-db-a3f85.appspot.com",
  messagingSenderId: "648168378037",
  appId: "1:648168378037:web:368823c7e0579ca71e78fc",
  measurementId: "G-DD6KH0P6N4",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }

  return userDocRef;
};
