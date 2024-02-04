let fruits = ["apple", "orange", "banana"];
fruits[0] = "grapes";

// Adding data to the array push = adding to the last, unshift = adding to the first
fruits.push("apple");
fruits.unshift("Guava");

// Removing data from array pop = removing the last, shift = removing the first
fruits.shift();
fruits.pop();
console.log(fruits);

let numOfFruits = fruits.length;
console.log(numOfFruits);

let index = fruits.indexOf("orange");
console.log(index);
console.log("----------------------------------------------------------------");
for(let i = 0; i < numOfFruits; i++)
{
    console.log(fruits[i]);
}
console.log("----------------------------------------------------------------");
fruits.sort().reverse();
for(let fruit of fruits)
{
    console.log(fruit);
}