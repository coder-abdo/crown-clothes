// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
} from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore, collection, writeBatch } from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIkEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();
 const signInWithGooglePopup = () => signInWithPopup(auth, provider);
const db = getFirestore();
const createUserFromAuth = async (
  userAuth: User,
  additionalInfo = {},
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userDocRef;
};
const createUserFromEmailAndPassword = async (
  email: string,
  password: string,
) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};
const loginWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};
 const signoutUser = async () => await signOut(auth);
const handleAuthChange = (cb: NextOrObserver<User>) =>
  onAuthStateChanged(auth, cb);

  const addCollectionsAndDocuments = async (collectionKey:string, collectionsToAdd:Document[]) =>{
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db)
    collectionsToAdd.forEach(element => {
           const docRef = doc(collectionRef, element.title.toLowerCase()) 
           batch.set(docRef, element)
    });
    await batch.commit()
    console.log("done")
  }
  export {signoutUser, handleAuthChange, loginWithEmailAndPassword, createUserFromEmailAndPassword, createUserFromAuth, auth, app, db, signInWithGooglePopup, addCollectionsAndDocuments}
