const person1 = {
    firstName: "Immanuel",
    lastName: "Prasad",
    age: 26,
    isEmployed: false,
    sayHello: () => console.log(`Hai I am ${person1.firstName} ${person1.lastName}`)
}
const person2 = {
    firstName: "Roseanne",
    lastName: "Park",
    age: 26,
    isEmployed: true,
    sayHello: function(){console.log(`Hai I am ${this.firstName} ${this.lastName}`)}
}

console.log(person1.firstName, person1.lastName);
person1.sayHello();
console.log(person2.firstName, person2.lastName);
person2.sayHello()