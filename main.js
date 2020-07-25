/// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBNOzSGs-hW4N4JD_-fTLXyV1wfNySVPVo",
    authDomain: "contact-form-d72a3.firebaseapp.com",
    databaseURL: "https://contact-form-d72a3.firebaseio.com",
    projectId: "contact-form-d72a3",
    storageBucket: "contact-form-d72a3.appspot.com",
    messagingSenderId: "151559915079",
    appId: "1:151559915079:web:afd91cf57012afe8389362",
    measurementId: "G-XPDHH4P67V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.database();

    var contactRef = firebase.database().ref().child('contactform');
document.getElementById('contactform').addEventListener('submit',submitform);

function submitform(e){
  e.preventDefault();
  var Name = getInputVal('Name');
  var Email = getInputVal('Email');
  var Phone = getInputVal('Phone');
  var Message = getInputVal('Message');


  saveForm(Name,Email,Phone,Message);
  document.getElementbyId('contactform').reset();
}


function getInputVal(id){
  return document.getElementbyId(id).value;
}


function saveForm(Name,Email,Phone,Message){
  var newcontactRef = contactRef.push();
  newcontactRef.set({

    Name : Name,
    Email : Email,
    Phone : Phone,
    Message : Message
  });
}
