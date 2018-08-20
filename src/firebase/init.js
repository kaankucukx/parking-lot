import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCTctcWzALm4ImNt09xyQWYyOlEH8GEJNY',
  authDomain: 'justmop-33.firebaseapp.com',
  databaseURL: 'https://justmop-33.firebaseio.com',
  projectId: 'justmop-33',
  storageBucket: 'justmop-33.appspot.com',
  messagingSenderId: '23025062781',
};

const justmopApp = firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true,
};
firestore.settings(settings);

export default justmopApp.firestore();
