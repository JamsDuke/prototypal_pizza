var Order = function() {
  this.pizza = null;
  this.beverage = null;
};
// root function in a prototype chain
var Pizza = function() {
  this.toppings = [];
  this.crustThickness = 1;
};
Pizza.prototype.setCrustThickness = function(thickness) {
  this.crustThickness = this.crustThickness * thickness;
}

var DeepDish = function() {
  this.description = "Chewy and greasy, but so filling!";
};
DeepDish.prototype = new Pizza();
// var myPizza = new DeepDish();
// DeepDish.setCrustThickness(3);
// console.log("myPizza", myPizza);

var ThinCrust = function() {
  this.description = "Crispy and light foldable fun!";
};
var TraditionalHandTossed = function() {
  this.description = "Boring, but wont offend picky eaters.";
}

// root function in another prototype chain
var Topping = function() {
  this.price = 0;
};

var Pepperoni = function() {
  this.isSpicy = false;
};
Pepperoni.prototype = new Topping();
Pepperoni.prototype.makeSpicy = function() {
  this.isSpicy = true;
};

var Mushroom = function() {
  this.name = "mushroom";
};
Mushroom.prototype = new Topping();

// yet another root functuon in a prototype chain
var Beverage = function() {
  this.size = "small";
};

var Soda = function() {

};

var FruitPunch = function() {
  this.size = "kids";
};
FruitPunch.prototype = new Beverage();

// A new order
var myOrder = new Order;
var myPizza = new DeepDish();
var HawaiianPunch = new FruitPunch();
var spicyPepperoni = new Pepperoni();
spicyPepperoni.makeSpicy();
var dirtyFungus = new Mushroom();
var myToppings = [spicyPepperoni, dirtyFungus];
myPizza.toppings.push(...myToppings);

// Add Pizza and Beverage to our ORder

myOrder.pizza = myPizza;
myOrder.beverage = HawaiianPunch;
console.log("myOrder so far", myOrder)














