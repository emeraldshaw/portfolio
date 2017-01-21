
var x = document.getElementById("contact");

var createform = document.createElement('form'); // Create New Element form
	createform.setAttribute("action", "");        // Setting action Attribute on form
	createform.setAttribute("method", "post");  // Setting method Attribute on form
	x.appendChild(createform);

var namelabel = document.createElement('label'); // Create Label for name field
	namelabel.innerHTML = "What's your name? : ";            // Set Field Labels
	createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create input field for name
	inputelement.setAttribute("type", "text");
	inputelement.setAttribute("name", "dname");
	createform.appendChild(inputelement);

var linebreak = document.createElement('br');
	createform.appendChild(linebreak);


var emaillabel = document.createElement('label');  //Create Label for email field
	emaillabel.innerHTML = "What's your email? : ";
	createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create input field for email
	emailelement.setAttribute("type", "text");
	emailelement.setAttribute("name", "demail");
	createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
	createform.appendChild(emailbreak);

// Append Textarea
var messagelabel = document.createElement('label');
	messagelabel.innerHTML = "Leave a message. : ";
	createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
	texareaelement.setAttribute("name", "dmessage");
	createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
	createform.appendChild(messagebreak);

// Append Submit Button
var submitelement = document.createElement('input');
	submitelement.setAttribute("type", "submit");
	submitelement.setAttribute("name", "dsubmit");
	submitelement.setAttribute("value", "Submit");
	createform.appendChild(submitelement);
