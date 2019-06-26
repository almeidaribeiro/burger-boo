import { firebase } from "@firebase/app";
import "@firebase/firestore";

  
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAvdRFhBcaRDkjegXbiodEb1ceMc-NqxCM",
  authDomain: "burger-cd587.firebaseapp.com",
  databaseURL: "https://burger-cd587.firebaseio.com",
  projectId: "burger-cd587",
  storageBucket: "burger-cd587.appspot.com",
  messagingSenderId: "15823408241",
  appId: "1:15823408241:web:c186fca9072d3932"
});

export const db = firebaseApp.firestore();
