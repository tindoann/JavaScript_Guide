// create variables and assign their values
var inStock;
var shipping;
inStock = true;
shipping = true;

// get the element that has an id of stock
// if true, the css switch to checkmark #
var elStock = document.getElementById('stock');
// Set class name with value of inStock variable
elStock.className = inStock;

// get the element that has an id of shipping
// if true, the css switch to checkmark # 
var elShip = document.getElementById('shipping');
// Set class name with value of shipping variable
elShip.className = shipping;

// Booleans primarily used for 2 reasons - used when the value only can be true/false. 
// Second, Booleans are used when your code can take more than one path.  