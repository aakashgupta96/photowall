import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyByy-NXijO4NJfFSWB4goDbtwsFNHVpuv0",
  authDomain: "photowall-bbf03.firebaseapp.com",
  databaseURL: "https://photowall-bbf03.firebaseio.com",
  projectId: "photowall-bbf03",
  storageBucket: "photowall-bbf03.appspot.com",
  messagingSenderId: "881871564052"
};

firebase.initializeApp(config)
const database = firebase.database()

export { database }