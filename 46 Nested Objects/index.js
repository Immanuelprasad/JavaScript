// const person = {
//     fullName: "Immanuel Prasad",
//     age: 26,
//     isStudent: false,
//     hobbies: ["Playing Games", "Listening Music"],
//     address: {
//         street: "52, Punitha Mathew Street",
//         city: "Palayamkottai, Tirunelveli",
//         country: "Tamil Nadu"
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[0]);
// console.log(person.address.country);
// console.log("---------------------------------------------------------");

// for(const property in person.address)
// {
//     console.log(person.address[property]);
// }
// console.log("---------------------------------------------------------");

// class Address
// {
//     constructor(street, city, country)
//     {
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }


class Person
{
    constructor(name, age, ...address)
    {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address
{
    constructor(street, city, country)
    {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Immanuel", 26, "Tirunelveli, TamilNadu");
const person2 = new Person("Roseanne", 26, "Seoul, SouthKorea");

console.log(person1.name);
console.log(person2.name);
console.log(person2.address);