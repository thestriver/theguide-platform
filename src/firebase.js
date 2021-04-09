// import * as firebase from 'firebase/app' using below fixed the errors
import { firebase } from '@firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import "firebase/analytics";


// firebase init - 
const firebaseConfig = {
  apiKey: "AIzaSyAnf-NjrkMxlANlnk00yo7aVwxVkB4Kis4",
  authDomain: "theguide-9aa7c.firebaseapp.com",
  projectId: "theguide-9aa7c",
  storageBucket: "theguide-9aa7c.appspot.com",
  messagingSenderId: "426607471552",
  appId: "1:426607471552:web:584839ad64c69475abf625",
  measurementId: "G-MZXTTZS541"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// utils
const db = firebase.firestore()
const auth = firebase.auth()


// collection references
const usersCollection = db.collection('users')
const formDataCollection = db.collection('dataCollected')

// const formDataUserSpecific =   usersCollection.doc(auth.currentUser.uid).collection('dataCollected')
// const userId = fb.auth.currentUser.uid
// userRef = await fb.usersCollection.doc(userId)

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  formDataCollection,
  // formDataUserSpecific
}