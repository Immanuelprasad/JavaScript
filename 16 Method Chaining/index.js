// No Method Chaining
// let userName = window.prompt("Enter the username : ");
// userName = userName.trim();

// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();

// userName = letter + extraChars;

// console.log(userName);

// Method Chaining

let userName = window.prompt("Enter the User Name : ");
userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
window.alert(userName);