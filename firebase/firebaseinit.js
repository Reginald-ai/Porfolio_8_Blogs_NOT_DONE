// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDxXae3-HO3CXXYJi93zo2z1pasRCad6g",
  authDomain: "finale-4.firebaseapp.com",
  projectId: "finale-4",
  storageBucket: "finale-4.appspot.com",
  messagingSenderId: "753710840696",
  appId: "1:753710840696:web:b4b91c45402c2ce690668d"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
