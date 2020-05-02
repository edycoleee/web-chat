import React from 'react';
import * as firebase from '../../node_modules/firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCQ--4tsao59dGP3wpxKRwE1BoRSS2Tm6g",
    authDomain: "kalijaga-chat.firebaseapp.com",
    databaseURL: "https://kalijaga-chat.firebaseio.com",
    projectId: "kalijaga-chat",
    storageBucket: "kalijaga-chat.appspot.com",
    messagingSenderId: "333818876298",
    appId: "1:333818876298:web:0c1417ae542768181f7873",
    measurementId: "G-068M2C4Z8C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;