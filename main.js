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


  var messagesRef = firebase.database().ref('messages');
  document.getElementById('contactform').addEventListener('submit', submitForm);

function submitForm(e){
	e.preventDefault();
	var Name = getInputVal('Name');
		var Email = getInputVal('Email');message
	var Phone = getInputVal('Phone');
	var Message = getInputVal('Message');
	saveMessage( Name,Email,Phone,Message);

}
function getInputVal(id) {
	return document.getElementById(id).value;
	// body...
}
function saveMessage(first_name,last_name,email,telephone,comments){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		Name:Name,
		Email:Email,
		Phone:Phone,
	Message:Message;
	});
}
