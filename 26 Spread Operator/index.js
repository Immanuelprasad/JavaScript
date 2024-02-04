let numbers = [1, 2, 3, 4, 5];
let maxNum = Math.max(...numbers);
console.log(maxNum);
console.log("----------------------------------------------------------------");

let userName = "Immanuel Prasad";
let letters = [...userName];
console.log(letters);
console.log("----------------------------------------------------------------");

let fruits1 = ["apple", "orange", "grapes"];
let vegetables1 = ["beans", "carrot", "cauliflower"];
let foods1 = [...fruits1, ...vegetables1];
console.log(foods1);
console.log("----------------------------------------------------------------");

let fruits2 = ["apple", "orange", "grapes"];
let vegetables2 = ["beans", "carrot", "cauliflower"];
let foods2 = [...fruits2, ...vegetables2, "egg", "meat"];
console.log(foods2);