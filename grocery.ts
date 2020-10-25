class Grocery {
    name: string;
    quantity: number;
    weight: number;
    price: number;

    constructor(name: string, quantity: number, weight: number, price: number) {
        this.name = name;
        this.quantity = quantity;
        this.weight = weight;
        this.price = price;
    }
}

let groceryList: Grocery[] = [];

var displayGroceryList = document.getElementById('grocery-list');
var listElement = document.createElement('ul');

let milk = new Grocery('Milk', 3, 128, 3.52);
groceryList.push(milk);

let bread = new Grocery('Bread', 6, 27, 2.08)
groceryList.push(bread);

let eggs = new Grocery('Eggs', 11, 24, 0.97);
groceryList.push(eggs);

displayGroceryList.appendChild(listElement);

for(var i = 0; i < groceryList.length; i++) {
    var listItem = document.createElement('li');
    listItem.innerHTML = groceryList[i].name + ' x ' + groceryList[i].quantity;
    listElement.appendChild(listItem);
}