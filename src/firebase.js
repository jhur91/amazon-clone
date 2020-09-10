import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDd4Mw1ODv1o41Co-_dkUdva5qgchHNglk",
  authDomain: "clone-7e146.firebaseapp.com",
  databaseURL: "https://clone-7e146.firebaseio.com",
  projectId: "clone-7e146",
  storageBucket: "clone-7e146.appspot.com",
  messagingSenderId: "506483976053",
  appId: "1:506483976053:web:b71cd59025cfe4be74d53c",
  measurementId: "G-C21B4J0MSV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export {db, auth };