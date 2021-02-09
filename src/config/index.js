import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDucDrqx2HEF2uVTVAbJf3QXzDH8Ju4x34",
  authDomain: "locker-69174.firebaseapp.com",
  databaseURL: "https://locker-69174.firebaseio.com",
  projectId: "locker-69174",
  storageBucket: "locker-69174.appspot.com",
  messagingSenderId: "137388853755",
  appId: "1:137388853755:web:4506012984c9b18939a35e"
}

const fire = firebase.initializeApp(config)
export default fire