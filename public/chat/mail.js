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

document.getElementById('contactForm').addEventListener('submit',submitForm);
 document.getElementById("intercgpa").innerHTML="9.73";
function submitForm(e){
    e.preventDefault();
    var name=document.getElementById('cname').value;
    var email=document.getElementById('cemail').value;
    var msg=document.getElementById('cmessage').value;
    console.log(name,email,msg);
    saveMessages(name,email,msg);
    document.querySelector('.alert').style.display='block';
    //   remove the alert
setTimeout(() => {
    document.querySelector('.alert').style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}



const saveMessages=(name,email,msgContent)=>{
    var newContactForm=chat.push();

    newContactForm.set({
        name:name,
        email:email,
        msgContent: msgContent,
    });
}

const getElementVal=(id)=>{
    return document.getElementById(id).value;
}


