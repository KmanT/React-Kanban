import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Initialize Firebase
const config = {
    apiKey: "AIzaSyCKYVT2y1kthivgY_GSh0mjMEr6OBLYH2E",
    authDomain: "project-planner-36f09.firebaseapp.com",
    databaseURL: "https://project-planner-36f09.firebaseio.com",
    projectId: "project-planner-36f09",
    storageBucket: "project-planner-36f09.appspot.com",
    messagingSenderId: "733253409718"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
