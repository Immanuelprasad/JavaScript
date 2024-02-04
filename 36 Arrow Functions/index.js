const hello = (name) => console.log(`Hello ${name}`);
hello("Immanuel");
console.log("------------------------------------------");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);
console.log("------------------------------------------");

const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(cubes);
console.log("------------------------------------------");

const evenNum = numbers.filter((element) => element % 2 === 0)
console.log(evenNum);
console.log("------------------------------------------");

const oddNum = numbers.filter((element) => element % 2 !== 0)
console.log(oddNum);
console.log("------------------------------------------");

const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(total);