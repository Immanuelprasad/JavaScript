class Animal
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    move(speed)
    {
        console.log(`This ${this.name} moves at a speed of ${speed}kph`);
    }
}
class Rabbit extends Animal
{
    constructor(name, age, runSpeed)
    {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run(speed)
    {
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal
{
    constructor(name, age, swimSpeed)
    {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(speed)
    {
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Eagle extends Animal
{
    constructor(name, age, flySpeed)
    {
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly(speed)
    {
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit1 = new Rabbit("Bunny", 2, 25);
const fish1 = new Fish("Nemo", 3, 20);
const eagle1 = new Eagle("Ethan", 7, 80);

console.log(rabbit1.name);
console.log(rabbit1.age);
console.log(rabbit1.runSpeed);
rabbit1.run();
console.log("------------------------------------------------------");
console.log(fish1.name);
console.log(fish1.age);
console.log(fish1.swimSpeed);
fish1.swim();
console.log("------------------------------------------------------");
console.log(eagle1.name);
console.log(eagle1.age);
console.log(eagle1.flySpeed);
eagle1.fly();