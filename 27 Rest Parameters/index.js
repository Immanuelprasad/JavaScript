// const food1 = "pizza";
// const food2 = "ramen";
// const food3 = "hotdog";
// const food4 = "burger";

// function openFridge(...foods)
// {
//     console.log(foods);
// }
// function getFood(...foods)
// {
//     return foods;
// }
// openFridge(food1, food2, food3, food4);
// console.log("----------------------------------------------------------------");
// const foods1 = getFood(food1, food2, food3, food4);
// console.log(foods1)

function sum(...numbers)
{
    let result = 0;
    for(let number of numbers)
    {
        result = result + number;
    }
    return result
}
const total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(`Sum is ${total}`);

console.log("----------------------------------------------------------------");

function getAverage(...numbers)
{
    let result = 0;
    for(let number of numbers)
    {
        result = result + number;
    }
    return result / numbers.length;
}
const average = getAverage(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(`Average is ${average}`);

console.log("----------------------------------------------------------------");

function combineStrings(...strings)
{
    return strings.join(" ");
}
const fullName = combineStrings("Mr.", "Immanuel", "Prasad");
console.log(fullName);