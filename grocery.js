var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, weight, price) {
        this.name = name;
        this.quantity = quantity;
        this.weight = weight;
        this.price = price;
    }
    Grocery.prototype.output = function () {
        return "Item: " + this.name;
    };
    return Grocery;
}());
var groceryList = [];
var milk = new Grocery("Milk", 3, 128, 3.52);
groceryList.push(milk);
var bread = new Grocery("Bread", 6, 27, 2.08);
groceryList.push(bread);
var eggs = new Grocery("Eggs", 11, 24, 0.97);
groceryList.push(eggs);
console.log(groceryList);
console.log(milk);
console.log(bread);
console.log(eggs);
