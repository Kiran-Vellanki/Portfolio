const firebaseConfig = {
    apiKey: "AIzaSyAaF6KHpPd2n-hn8Ewb_FAtDY1a2nkS2C0",
    authDomain: "portfolio2-591b9.firebaseapp.com",
    databaseURL: "https://portfolio2-591b9-default-rtdb.firebaseio.com",
    projectId: "portfolio2-591b9",
    storageBucket: "portfolio2-591b9.appspot.com",
    messagingSenderId: "606380004623",
    appId: "1:606380004623:web:0b2f80d1df6613a003da7a",
    measurementId: "G-4BYJ6469WT"
  };
//   initialize
firebase.initializeApp(firebaseConfig);
 

var chat= firebase.database().ref("portfolio2");

document.getElementById("intercgpa").innerHTML="9";