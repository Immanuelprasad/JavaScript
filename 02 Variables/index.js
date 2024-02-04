let age = 26;
let price = 10.99;
let gpa = 2.7;
let fullName = "Immanuel Prasad";
let online = true;
let isStudent = false;

console.log(`Your full name is ${fullName} is he online on Twitter? ${online}`);
console.log(`Is he a student? ${isStudent}`)
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your GPA is ${gpa}`);

document.getElementById("p2").textContent = `Hai ${fullName} your age is ${age} and you are on online? ${online}`;