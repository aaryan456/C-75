import firebase from 'firebase'
require("@firebase/firestore")
var firebaseConfig = {
  apiKey: "AIzaSyBfvj3I_2dufxMygYThboLOEKKg1CcYouk",
  authDomain: "storyhub-42869.firebaseapp.com",
  databaseURL: "https://storyhub-42869.firebaseio.com",
  projectId: "storyhub-42869",
  storageBucket: "storyhub-42869.appspot.com",
  messagingSenderId: "162528550055",
  appId: "1:162528550055:web:ed4b93eed06cc251eb8f82"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()