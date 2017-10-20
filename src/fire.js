import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDycjpyn7X4_WHBSaGJEIRa8m2eT7TLhfE",
  authDomain: "reactproject-19d4d.firebaseapp.com",
  databaseURL: "https://reactproject-19d4d.firebaseio.com",
  projectId: "reactproject-19d4d",
  storageBucket: "reactproject-19d4d.appspot.com",
  messagingSenderId: "309232861993"
};
  
const fire = firebase.initializeApp(config);

export default fire;