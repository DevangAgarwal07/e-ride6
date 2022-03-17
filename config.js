import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDxDQpj9QgzcdMsK7NZ8hv3-P1RvCqrbEY",
authDomain: "e-ride-b879a.firebaseapp.com",
projectId: "e-ride-b879a",
storageBucket: "e-ride-b879a.appspot.com",
messagingSenderId: "139911666594",
appId: "1:139911666594:web:941ffd7103a98591c870fb"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
