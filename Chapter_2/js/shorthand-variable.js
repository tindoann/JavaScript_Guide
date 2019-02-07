// METHOD 1 - variable are declared and values assigned in the same statement

var price = 5;
var quantity = 14;
var total = price * quantity;

// METHOD 2 - Three variables are declared one the same line, then values assined to each. 
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;


// METHOD 3 - Two variables are declared and assigned values on the same line. Then one is declared and assigned a value on the next line.
var price = 5, quantity = 14;
var total = price * quantity;

// Write the total into the element with id of cost
var el = document.getElementById('cost');  // Gets the element with an id of cost
el.textContent = '$' + total;                // Replaces the content of this element

