// class Rectangle
// {
//     constructor(width, height)
//     {
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth)
//     {
//         if(newWidth > 0)
//         {
//             this._width = newWidth;
//         }
//         else
//         {
//             console.error("Width must be a positive number");
//         }
//     }
//     set height(newHeight)
//     {
//         if(newHeight > 0)
//         {
//             this._height = newHeight;
//         }
//         else
//         {
//             console.error("Height must be a positive number");
//         }
//     }
//     get width()
//     {
//         return this._width;
//     }
//     get height()
//     {
//         return this._height;
//     }
//     get area()
//     {
//         return this._width * this._height;
//     }
// }

// const rectangle1 = new Rectangle(4, 5);
// console.log(rectangle1.area);

class Person
{
    constructor(firstName, lastName, age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName)
    {
        if(typeof newFirstName === "string" && newFirstName.length > 0)
        {
            this._firstName = newFirstName
        }
        else
        {
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(newLastName)
    {
        if(typeof newLastName === "string" && newLastName.length > 0)
        {
            this._lastName = newLastName
        }
        else
        {
            console.error("Last name must be a non-empty string");
        }
    }
    set age(newAge)
    {
        if(typeof newAge === "number" && newAge > 0)
        {
            this._age = newAge
        }
        else
        {
            console.error("Age must be a non-negative number");
        }
    }
    get firstName()
    {
        return this._firstName;
    }
    get lastName()
    {
        return this._lastName;
    }
    get age()
    {
        return this._age;
    }
    get fullName()
    {
        return `${this._firstName} ${this._lastName}`;
    }
}

const person1 = new Person("Immanuel", "Prasad", 26)
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);
console.log(person1.age);