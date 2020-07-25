// Your web app's Firebase configuration
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
 firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var Name = getInputVal('Name');
  var Email = getInputVal('Email');
  var Phone = getInputVal('Phone');
  var Message = getInputVal('Message');

  // Save message
  saveMessage(Name, Email, Phone, Message);

  // Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(Name, Email, Phone, Message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    Name: Name,
    Email:Email,
    Phone:Phone,
    Message:Message,
  });
}
