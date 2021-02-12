import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARm5Zd3VRuQngXHOCdNnveLVf-ZwRHsZA",
  authDomain: "vue-site-6ce77.firebaseapp.com",
  projectId: "vue-site-6ce77",
  storageBucket: "vue-site-6ce77.appspot.com",
  messagingSenderId: "833828170719",
  appId: "1:833828170719:web:548404989f35fb8842726a"
};
// init firebase
firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };

