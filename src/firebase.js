import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAI_GrOKJ512Cf_Y0k0myNZkrwuC6Te7Fk",
    authDomain: "netflix-5b711.firebaseapp.com",
    projectId: "netflix-5b711",
    storageBucket: "netflix-5b711.appspot.com",
    messagingSenderId: "181013349554",
    appId: "1:181013349554:web:68de78a7bc2502be8d75ab"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;