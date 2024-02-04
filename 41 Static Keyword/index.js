// class MathUtil
// {
//     static PI = 3.14159;

//     static getDiameter(radius)
//     {
//         return radius * 2;
//     }
//     static getCircumference(radius)
//     {
//         return 2 * this.PI * radius;
//     }
// }
// const mat = new MathUtil();
// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(5));
// console.log(MathUtil.getCircumference(5));

class Users
{
    static userCount = 0;

    constructor(userName)
    {
        this.userName = userName;
        Users.userCount++;
    }
    sayHello()
    {
        console.log(`Hello my username is ${this.userName} and count is ${Users.userCount}`);
    }
}

const user1 = new Users("Immanuel1");
const user2 = new Users("Immanuel2");
const user3 = new Users("Immanuel3");
console.log(user1.userName);
user1.sayHello();