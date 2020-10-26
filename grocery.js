//Defining Grocery class.
var Grocery = /** @class */ (function () {
    //Defining constructor to set class attributes.
    function Grocery(name, quantity, weight, price) {
        this.name = name;
        this.quantity = quantity;
        this.weight = weight;
        this.price = price;
    }
    return Grocery;
}());
//Defining empty array to populate with Grocery objects.
var groceryList = [];
//Defining HTML elements to populate output.
var displayGroceryList = document.getElementById('grocery-list');
var listElement = document.createElement('ul');
//Instantiating different Grocery objects and adding to array.
var milk = new Grocery('Milk', 3, 128, 3.52);
groceryList.push(milk);
var bread = new Grocery('Bread', 6, 27, 2.08);
groceryList.push(bread);
var eggs = new Grocery('Eggs', 11, 24, 0.97);
groceryList.push(eggs);
//Appending ul to p HTML element.
displayGroceryList.appendChild(listElement);
//Displaying each object in groceryList array through HTML output.
for (var i = 0; i < groceryList.length; i++) {
    var listItem = document.createElement('li');
    listItem.innerHTML = groceryList[i].name + ' x ' + groceryList[i].quantity;
    listElement.appendChild(listItem);
}
