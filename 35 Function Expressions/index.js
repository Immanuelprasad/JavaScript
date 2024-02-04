const hello = function(){
    console.log("Hello!");
}
hello();
console.log("------------------------------------------");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
console.log(squares);
console.log("------------------------------------------");
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});
console.log(cubes);
console.log("------------------------------------------");
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
console.log(evenNums);
console.log("------------------------------------------");
const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});
console.log(oddNums);
console.log("------------------------------------------");
const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});
console.log(total);