import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATzSvad7AomciS_G7GHWJ8eNfXWU1JjB0",
  authDomain: "netflix-1c3a4.firebaseapp.com",
  projectId: "netflix-1c3a4",
  storageBucket: "netflix-1c3a4.appspot.com",
  messagingSenderId: "617268145038",
  appId: "1:617268145038:web:316790999ce65b662452df",
  measurementId: "G-X4EF51G72W",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
