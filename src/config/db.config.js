// const express = require('express');
const { initializeApp } = require('firebase/app');
const { getDatabase } = require('firebase/database')
const { getAuth  }  = require('firebase/auth');
const { getStorage } = require('firebase/storage');
// const firebase = require("firebase-admin");



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWgqYGuPQZ6bb5LWNvU2qQskarCtpKbg0",
  authDomain: "dbmxh-1c01c.firebaseapp.com",
  databaseURL: "https://dbmxh-1c01c-default-rtdb.firebaseio.com",
  projectId: "dbmxh-1c01c",
  storageBucket: "dbmxh-1c01c.appspot.com",
  messagingSenderId: "410639759029",
  appId: "1:410639759029:web:37094520d9ef49311ef0fc",
  measurementId: "G-VXMNF4ZFLK"
};

// Initialize Firebase
const Firebaseapp = initializeApp(firebaseConfig);
const auth=getAuth();
const database = getDatabase();
const storageBucket = getStorage(Firebaseapp);
module.exports = { Firebaseapp, auth,database, storageBucket };




//--------------------------------------------------------




// //SDK admin firebase
// const admin = require('firebase-admin')
// const serviceAccount = require("../serviceAccountKey.json");
// // const clientAuth = require('firebase/auth');


// // admin.initializeApp({
// //   credential: admin.credential.cert(serviceAccount),
// //   databaseURL: "https://dbmxh-1c01c-default-rtdb.firebaseio.com"
// // });
// // Kết nối đến Firebase Realtime Database
// // const database = admin.database();
// // const auth = admin.auth();

// const firebaseConfig = {
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://dbmxh-1c01c-default-rtdb.firebaseio.com"
// };

// const app = admin.initializeApp(firebaseConfig);
// // Kết nối đến Firebase Realtime Database
// const database = app.database();
// const auth = app.auth();

// module.exports = {database, auth };
