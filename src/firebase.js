import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const credentials = {
  REACT_APP_FIREBASE_API_KEY: 'AIzaSyBCLO1mTASlQOemHVonrZry1h0KQT3L4Qs',
  REACT_APP_FIREBASE_AUTH_DOMAIN: 'letour-5445a.firebaseapp.com',
  REACT_APP_FIREBASE_DATABASE_URL: '',
  REACT_APP_FIREBASE_PROJECT_ID: 'letour-5445a',
  REACT_APP_FIREBASE_STORAGE_BUCKET: 'letour-5445a.appspot.com',
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID: '317903851261',
  REACT_APP_FIREBASE_APP_ID: '1:317903851261:web:0e79cd3ee43a7f2ad53894',
  REACT_APP_MEASUREMENT_ID: 'G-ERPJRD1217'
};

const firebaseSettings = {
  apiKey: credentials.REACT_APP_FIREBASE_API_KEY,
  authDomain: credentials.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: credentials.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: credentials.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: credentials.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: credentials.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: credentials.REACT_APP_FIREBASE_APP_ID,
  measurementId: credentials.REACT_APP_MEASUREMENT_ID
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseSettings)
  : firebase.app();

const firestore = app.firestore();

export const database = {
  exercises: firestore.collection('exercises'),
  workouts: firestore.collection('workouts'),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
};

export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default app;
