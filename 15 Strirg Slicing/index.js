const fullName = 'Immanuel Prasad';

// let firstName = fullName.slice(0, 8);
// let lastName = fullName.slice(9, 15);
// let lastName = fullName.slice(9);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" "));
console.log(`FirstName : ${firstName}, LastName : ${lastName}`);

let firstChar = fullName.slice(0, 1);
console.log(firstChar);

let lastChar = fullName.slice(-2);
console.log(lastChar);

const email = "Bro1@gmail.com"
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(userName);
console.log(extension);