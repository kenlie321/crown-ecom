import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAGwPGAZa0SQNVkOqJgOt1x4VeXPO_F4Tg",
    authDomain: "crown-ecom-26c1c.firebaseapp.com",
    databaseURL: "https://crown-ecom-26c1c.firebaseio.com",
    projectId: "crown-ecom-26c1c",
    storageBucket: "crown-ecom-26c1c.appspot.com",
    messagingSenderId: "978927854031",
    appId: "1:978927854031:web:fcc23287190eb44f8d72ba"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;