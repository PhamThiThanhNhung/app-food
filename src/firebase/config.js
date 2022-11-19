import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfjUgnjWJmVHQ-wySBJjaDPYYBWJxlp7o",
    authDomain: "food-app-50092.firebaseapp.com",
    projectId: "food-app-50092",
    storageBucket: "food-app-50092.appspot.com",
    messagingSenderId: "672642848718",
    appId: "1:672642848718:web:2b827606b2869d7facfd9f"
  };
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.db();

export { db, auth};
export default firebase;