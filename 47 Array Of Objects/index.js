const fruits = [{name: "apple", colour: "red", calories: 95},
                {name: "orange", colour: "orange", calories: 45},
                {name: "banana", colour: "yellow", calories: 105},
                {name: "coconut", colour: "white", calories: 159}];
fruits.push({name: "grapes", colour: "purple", calories: 155});

console.log(fruits);
console.log("--------------------------------");
console.log(fruits.splice(1, 2));
console.log("--------------------------------");
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);
console.log("--------------------------------");
const yellowFruits = fruits.filter(fruit => fruit.colour === "red");
console.log(yellowFruits);
console.log("--------------------------------");
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit)