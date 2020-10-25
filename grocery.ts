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

let milk = new Grocery("Milk", 3, 128, 3.52);
groceryList.push(milk);

let bread = new Grocery("Bread", 6, 27, 2.08)
groceryList.push(bread);

let eggs = new Grocery("Eggs", 11, 24, 0.97);
groceryList.push(eggs);

console.log(groceryList);
console.log(milk);
console.log(bread);
console.log(eggs);