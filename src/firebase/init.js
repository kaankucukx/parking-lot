import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCTctcWzALm4ImNt09xyQWYyOlEH8G***',
  authDomain: '****.firebaseapp.com',
  databaseURL: 'https://***.firebaseio.com',
  projectId: 'lot-33',
  storageBucket: '***-33.appspot.com',
  messagingSenderId: '230250627***',
};

const slotApp = firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true,
};
firestore.settings(settings);

export default slotApp.firestore();
