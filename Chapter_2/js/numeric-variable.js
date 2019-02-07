// Create three variables to store the information needed. 
// Declaring a variable is like giving birth to an object to this world #
var price;
var quantity;
var total;

// Assign values to the price and quantity variables.
// Then we assign it a name or value #
price = 5;
quantity = 14;

// Calculate the total by multiplying the price by quantity.
total = price * quantity;

// Finds the element whose id attribute has a value of cost
// <div id='cost'>Cost: $5 per tile</div>
var el = document.getElementById('cost');

// Replaces the content of that element with the new content - $70 
el.textContent = '$' + total;


var price 
var quantity; 
var total; 

price = 5; 
quantity = 14; 

total = price * quantity; 

var el = document.getElementById('cost'); 