import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCT4xYxGFkNubzac13jp4c-NYJN2ylxq-I",
  authDomain: "crwn-clothing-ebfc7.firebaseapp.com",
  projectId: "crwn-clothing-ebfc7",
  storageBucket: "crwn-clothing-ebfc7.appspot.com",
  messagingSenderId: "643451658889",
  appId: "1:643451658889:web:c81923bb18f380a0015c58"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    };
  }

  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;