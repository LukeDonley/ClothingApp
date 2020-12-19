import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAfSlEpApdsmI_gN7X4nQLdfPZ9-xxL3ic',
  authDomain: 'crwn-db-7aceb.firebaseapp.com',
  projectId: 'crwn-db-7aceb',
  storageBucket: 'crwn-db-7aceb.appspot.com',
  messagingSenderId: '913541100166',
  appId: '1:913541100166:web:17bc0f3f08af2f32e85707',
  measurementId: 'G-MR4KXG4HDE'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
