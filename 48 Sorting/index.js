let fruits = [1, 10, 5, 7, 8, 3, 6, 2, 4, 9];
console.log(fruits.sort());
console.log("--------------------------------");

console.log(fruits.sort((a, b) => b - a));
console.log("--------------------------------");

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

const peopleReverseOrderAge = people.sort((a, b) => (b.age - a.age));
console.log(peopleReverseOrderAge);

console.log("--------------------------------");
const peopleOrderAge = people.sort((a, b) => (a.age - b.age));
console.log(peopleOrderAge);

console.log("--------------------------------");
const peopleOrderName = people.sort((a, b) => a.name.localeCompare(b.name));
console.log(peopleOrderName);