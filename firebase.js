import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDvGzfHr4iMkHPvo1f5cskH_YF5Utiv-js",
    authDomain: "docs-f4230.firebaseapp.com",
    projectId: "docs-f4230",
    storageBucket: "docs-f4230.appspot.com",
    messagingSenderId: "127158265823",
    appId: "1:127158265823:web:b66cce16e48a5be8d1066a"
  };

  const app = !firebase.apps.length 
  ? firebase.initilizeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();

  export { db };