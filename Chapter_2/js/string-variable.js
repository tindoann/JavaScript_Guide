// Create variables to hold the name and note text.
var username;
var message;

// Assign values to these variables.
username = 'Molly';
message = 'See our upcoming range';

//Last four lines, update the page. 

// Get the element with an id of name.
//<div id="title>Howdy<span id="name">friend</span>!</div>
var elName = document.getElementById('name');
// Replace the content of this element.
elName.textContent = username;

// Get the element with an id of note.
//  <div id="note">Take a look around...</div>
var elNote = document.getElementById('note');
// Replace the content of this element.
elNote.textContent = message;


