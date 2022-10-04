 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
 apiKey: "AIzaSyD-ILcOMszFX11oWxl_27GP8JQ17Nqy31E",
  authDomain: "school-presentation-day.firebaseapp.com",
  databaseURL: "https://school-presentation-day-default-rtdb.firebaseio.com",
  projectId: "school-presentation-day",
  storageBucket: "school-presentation-day.appspot.com",
  messagingSenderId: "483349375104",
  appId: "1:483349375104:web:0071572d5b304e34fd1e65",
  measurementId: "G-752J5KFEGB"
}
firebase.initializeApp(firebaseConfig)
export default firebase.database()
 

  