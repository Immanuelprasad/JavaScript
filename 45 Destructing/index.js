let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);
console.log("---------------------------------------------------------------");

const colours = ["Red", "Green", "Blue", "Yellow", "Pink"];

[colours[0], colours[4]] = [colours[4], colours[0]];
console.log(colours);
console.log("---------------------------------------------------------------");

const[firstColour, secondColour, thirdColour, ...extraColour] = colours;
console.log(firstColour);
console.log(secondColour);
console.log(thirdColour);
console.log(extraColour);
console.log("---------------------------------------------------------------");

const person1 = {
    firstName: "Immanuel",
    lastName: "Prasad",
    age: 26,
    country: "TamilNadu"
}
const person2 = {
    firstName: "Roseanne",
    lastName: "Park",
    age: 26
}
const{firstName, lastName, age, country="South korea"} = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(country);
console.log("---------------------------------------------------------------");

function displayPerson({firstName, lastName, age, country="South Korea"})
{
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Country: ${country}`);
}
displayPerson(person2);