const firebaseConfig = {
apiKey: "AIzaSyDsBsKDexJXXBEUBnNXHPJ6Ex3WkVzIG8k",
authDomain: "contact-form-54854.firebaseapp.com",
databaseURL: "https://contact-form-54854.firebaseio.com",
projectId: "contact-form-54854",
storageBucket: "contact-form-54854.appspot.com",
messagingSenderId: "440888530197",
appId: "1:440888530197:web:de723f45ae396a520d451c",
measurementId: "G-L0SW229LBF"
};3
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



var contactRef= firebase.database().ref().child("ContactForm");

document.getElementbyId ("Displayform").addEventListener( 'Submit', submitform);

function submitform(e){
  e.preventDefault();
  var Title = getInputVal('Title');
  var Name = getInputVal('Name');
  var Email = getInputVal('Email') ;
  var Phone = getInputVal('Phone');
  var Message = getInputVal('Message') ;
  saveform(Title,Name,Email,Phone,Message);
  document.getElementbyId('Displayform').reset();
}


function getInputVal(id){
  return document.getElementbyId(id).value;
}


function saveform(Title,Name,Email,Phone,Message){
  var newContactRef = contactRef.push();
  newContactRef.set({

    Title : Title,
    Name : Name,
    Email : Email,
    Phone : Phone,
    Message : Message
  })
}
