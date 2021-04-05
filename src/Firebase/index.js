import firebase from "firebase/app";
import "@firebase/firestore"


  const app = firebase.initializeApp ({
    apiKey: "AIzaSyDIkR3xsEIWF_rb0fmQ8CoHSMQ9TrkR2yU",
    authDomain: "prueba-9bfaa.firebaseapp.com",
    projectId: "prueba-9bfaa",
    storageBucket: "prueba-9bfaa.appspot.com",
    messagingSenderId: "582092698924",
    appId: "1:582092698924:web:1b80689bc0188dcb352889",
    measurementId: "G-CL1M5K08HE"
  });

  export const getFirebase = () => {
        return app;
  }

  export const getFirestore = () => {
      return firebase.firestore(app);
  }