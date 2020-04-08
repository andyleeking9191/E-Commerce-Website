import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCGIkA3h5d3JKBV5eXb65BzfR1ta1ajc8s",
    authDomain: "e-commerce-db-8d0f9.firebaseapp.com",
    databaseURL: "https://e-commerce-db-8d0f9.firebaseio.com",
    projectId: "e-commerce-db-8d0f9",
    storageBucket: "e-commerce-db-8d0f9.appspot.com",
    messagingSenderId: "25037865406",
    appId: "1:25037865406:web:34255c94be8b12d9a0f9ef",
    measurementId: "G-9DZ47F3Y8E"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
